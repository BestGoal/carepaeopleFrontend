import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Description from "@material-ui/icons/Description"
import HighlightOff from "@material-ui/icons/HighlightOff"
import Modal from 'react-modal';
import { workerDocument } from "../../../../configs/index"
import { getWorkerDocument, addWorkerDocument, getWorkerDocumentWithId, removeWorkerDocumentWithId } from "../../../../redux/action/profile/profileRequest"

const customStyles = {
	content: {
		maxWidth: "800px",
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

export default function WorkerDocumentPage() {

	const dispatch = useDispatch();
	const [documentData, setDocumentData] = useState([])
	const [documentDataWithId, setDocumentDataWithId] = useState([])
	const [currentDocumentType, setCurrentDocumentType] = useState(0)
	const [mode, setMode] = useState(false)

	const loadFunction = async () => {
		let data = await getWorkerDocument(dispatch)
		setDocumentData(data)
	}
	/*eslint-disable */
	useEffect(() => {
		loadFunction()
	}, [])
	/*eslint-enable */

	const openFile = (id) => {
		setCurrentDocumentType(id)
		document.getElementById("file").click()
	}

	const ChooseImage = async (e) => {
		if (e.target.files.length) {
			const fpdata = new FormData();
			fpdata.append('id', currentDocumentType);
			fpdata.append('document', e.target.files[0]);
			let data = await addWorkerDocument(fpdata, dispatch)
			if (data) {
				setDocumentData(data)
			}
		}
	}

	const showUploadedDoc = async (item) => {
		setCurrentDocumentType(item.id)
		let data = await getWorkerDocumentWithId(item.id, dispatch)
		if (data) {
			setDocumentDataWithId(data)
			setMode(true);
		}
	}

	const removeDocument = async (url) => {
		let data = await removeWorkerDocumentWithId(url, currentDocumentType, dispatch)
		if (data) {
			setDocumentDataWithId(data)
			loadFunction()
		}
	}

	const DocumentItemRender = ({ item }) => {
		let dItem = documentData.filter(it => it.documentId === item.id);
		let count = 0;
		if (dItem.length) {
			count = dItem[0].document.length
		}
		return (
			<Grid container className="item" spacing={3}>
				<Grid item xs={6}>
					<Button disabled={count >= 10} fullWidth className="bg-theme color-white" onClick={() => openFile(item.id)}>Upload</Button>
				</Grid>
				<Grid item xs={6}>
					<Button fullWidth disabled={count === 0} className={count > 0 ? "bg-eee theme-border" : "bg-eee"} onClick={() => showUploadedDoc(item)}>
						{
							count > 0 ? `Uploaded(${count})` : "NOT UPLOADED"
						}
					</Button>
				</Grid>
			</Grid>
		)
	}

	return (
		<Container className="container pt-2 pb-1">
			<Card className="p-2 theme-border theme-box-shadow">
				<CardContent>
					<Box className="pb-1">
						<Typography className="text-align-center font-weight-bold" variant="h5"> DOCUMENTS </Typography>
					</Box>
					{
						workerDocument.map((item, key) => (
							<Box key={key} className="mt-1">
								<Typography>{item.title}</Typography>
								<DocumentItemRender item={item} />
							</Box>
						))
					}
				</CardContent>
			</Card>
			<input id="file" type="file" style={{ display: "none" }} onChange={e => ChooseImage(e)} />
			<Modal
				isOpen={mode}
				onRequestClose={() => setMode(false)}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Typography className="text-align-center" variant="h6">{workerDocument.filter(it => it.id === documentDataWithId.documentId)[0]?.title}</Typography>
					</Grid>
					{
						documentDataWithId.document?.map((key, item) => (
							<Grid item md={3} sm={4} xs={12} key={key} className="d-flex align-items-center">
								<a href={documentDataWithId.document[item].url} download={documentDataWithId.document[item].url} className="d-flex crusor-pointer modal-a-download">
									<Description />
									<Typography className="letter-cut-dot">{documentDataWithId.document[item].fileName}</Typography>
								</a>
								<HighlightOff className="crusor-pointer" onClick={() => removeDocument(documentDataWithId.document[item].url)} />
							</Grid>
						))
					}
					<Grid item className="d-flex align-items-center" xs={12}>
						<Button className="bg-theme color-white" fullWidth onClick={() => setMode(false)}>CANCEL</Button>
					</Grid>
				</Grid>
			</Modal>
		</Container>
	)
}