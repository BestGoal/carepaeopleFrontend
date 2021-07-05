import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete';
import ModifiedDatePicker from "./modifiedDatePicker"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import ArrowUpward from "@material-ui/icons/ArrowUpward"
import Add from "@material-ui/icons/Add"
import { toast } from "react-toastify"
import TempAddress from "./tempAddress"
import { locationData, breakData, transitData, dutyData } from "../../../../configs/index"
import { postShiftDirect } from "../../../../redux/action/client/shifts/index"

export default function ClientPost() {

    const userData = useSelector(state => state.auth.userData)
    const templateShift = {
        job_position: locationData[0].value,
        vacancies: 1,
        rate: 15,
        dateType: true,
        date: [],
        note: "",
        eventName: "",
        unpaid_break: 0,
        transit_allowance: 0,
        address: [
            `${userData.streetNumber} ${userData.streetName} ${userData.city} ${userData.province} ${userData.zipcode} ${userData.country}`
        ],
        duty: dutyData[0].value
    }

    const [positionData, setPositionData] = useState(templateShift)
    const [vacancieData, setVacaniceData] = useState([{ title: "1", value: 1 }]);
    const [vacanciesStatus, setVacanciesStatus] = useState(false)
    const [rateData, setRateData] = useState([{ title: '$15 per hour', value: 15 }]);
    const [rateStatus, setRateStatus] = useState(false)
    const [mode, setMode] = useState(false);
    const [tempAddress, setTempAddress] = useState("")
    const [addressData, setAddressData] = useState([
        `${userData.streetNumber} ${userData.streetName} ${userData.city} ${userData.province} ${userData.zipcode} ${userData.country}`
    ])
    const [addressFlag, setAddressFlag] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        let tempVacineData = [];
        for (let i = 1; i <= 50; i++) {
            tempVacineData.push({ title: String(i), value: i });
        }
        tempVacineData.push({ title: "Other", value: 0 });
        setVacaniceData(tempVacineData);

        let tempRateData = [];
        for (let i = 15; i <= 100; i++) {
            tempRateData.push({ title: `${i}$ per hour`, value: i });
        }
        tempRateData.push({ title: "Other", value: 0 });
        setRateData(tempRateData);
    }, [])

    const updatePosition = (key, value) => {
        let temp = {}
        temp[key] = value;
        setPositionData(Object.assign({}, positionData, temp));
        if (key === "vacancies" && value === 0) {
            setVacanciesStatus(true);
        }
        if (key === "rate" && value === 0) {
            setRateStatus(true);
        }
    }

    const changeAddress = (flag, string = "") => {
        if (flag) {
            if (tempAddress) {
                setAddressData([...addressData, ...[tempAddress]]);
                setTempAddress("")
            } else if (string) {
                let address = [...positionData.address, ...[string]];
                setPositionData(Object.assign({}, positionData, { address }));
            } else {
                toast.error("Can't add empty address")
            }
        } else {
            let address = [];
            for (let i = 0; i < positionData.address.length; i++) {
                if (positionData.address[i] !== string) {
                    address.push(positionData.address[i]);
                }
            }
            setPositionData(Object.assign({}, positionData, { address }));
        }
    }

    const postShift = (flag) => {

        const validator = () => {
            if (positionData.vacancies <= 0) {
                return "Vacancies can't small than 1"
            } else if (positionData.rate <= 0) {
                return "Rate can't small than 1"
            } else if (!positionData.address.length) {
                return "Address count can't small than 1"
            } else if (!positionData.date.length) {
                return "Date count can't small than 1"
            }
            return true;
        }
        let cflag = validator();

        if (flag) {
            let rdata = postShiftDirect(positionData, dispatch);
            if (rdata) {
                setPositionData(templateShift)
            }
        } else {
            toast.error(cflag)
        }
    }

    return (
        <Container className="container pt-2 client-home pb-1">
            <Typography variant="h5" className="text-align-center font-weight-bold"> POST SHIFTS </Typography>
            <Box className="main-container theme-border theme-box-shadow theme-border-radius client-post p-3">
                <Grid container>
                    <Grid item sm={4} xs={12}>
                        <Typography className="post-item-header">JOB POSITION</Typography>
                        <Box className="p-1 pl-0">
                            <Autocomplete
                                fullWidth
                                options={locationData}
                                getOptionLabel={(option) => option.title}
                                value={locationData.filter(it => it.value === positionData.job_position)[0]}
                                renderInput={(params) => <TextField {...params} variant="outlined" />}
                                onChange={(e, v) => updatePosition("job_position", v?.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography className="post-item-header">NO.OF VACANCIES</Typography>
                        <Box className="p-1 pl-0">
                            {
                                !vacanciesStatus ?
                                    <Autocomplete
                                        fullWidth
                                        options={vacancieData}
                                        getOptionLabel={(option) => option.title}
                                        value={vacancieData.filter(it => it.value === positionData.vacancies)[0]}
                                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                                        onChange={(e, v) => updatePosition("vacancies", v.value)}
                                    />
                                    :
                                    <TextField fullWidth type="number" variant="outlined" value={positionData.vacancies} onChange={(e) => updatePosition("vacancies", e.currentTarget.value)} />
                            }
                        </Box>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography className="post-item-header">HOURLY RATE</Typography>
                        <Box className="p-1 pl-0">
                            {
                                !rateStatus ?
                                    <Autocomplete
                                        fullWidth
                                        options={rateData}
                                        getOptionLabel={(option) => option.title}
                                        value={rateData.filter(it => it.value === positionData.rate)[0]}
                                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                                        onChange={(e, v) => updatePosition("rate", v.value)}
                                    />
                                    :
                                    <TextField fullWidth type="number" variant="outlined" value={positionData.rate} onChange={(e) => updatePosition("rate", e.currentTarget.value)} />
                            }
                        </Box>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        <Typography className="post-item-header">DUTY OF THE WORKER</Typography>
                        <Box className="p-1 pl-0">
                            <Autocomplete
                                fullWidth
                                options={dutyData}
                                getOptionLabel={(option) => option.title}
                                value={dutyData.filter(it => it.value === positionData.duty)[0]}
                                renderInput={(params) => <TextField {...params} variant="outlined" />}
                                onChange={(e, v) => updatePosition("job_position", v?.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="post-item-header">EVENT TYPE</Typography>
                        <Grid container>
                            <Grid item sm={4} xs={6} className="d-flex justify-content-start align-items-center p-1 crusor-pointer" onClick={() => updatePosition("dateType", true)}>
                                <Typography className="font-weight-bold">Single Day</Typography>
                                <Checkbox checked={positionData.dateType} color="primary" />
                            </Grid>
                            <Grid item sm={4} xs={6} className="d-flex justify-content-start align-items-center p-1 crusor-pointer" onClick={() => updatePosition("dateType", false)}>
                                <Typography className="font-weight-bold">Multi Day</Typography>
                                <Checkbox checked={!positionData.dateType} color="primary" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <ModifiedDatePicker dateData={positionData.date} status={positionData.dateType} updatePosition={updatePosition} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="post-item-header">ADD SHIFT NOTES</Typography>
                        <TextField fullWidth variant="outlined" multiline rows={3} value={positionData.note} onChange={(e) => updatePosition("note", e.currentTarget.value)} />
                    </Grid>
                    <Grid item xs={12} className="mt-1">
                        <Button fullWidth variant="contained" onClick={() => setMode(!mode)}>
                            {
                                !mode ? <ArrowDownward /> : <ArrowUpward />
                            }
                            Mods
                        </Button>
                    </Grid>
                    {
                        mode ?
                            <>
                                <Grid item sm={4} xs={12} className="mt-1">
                                    <Typography className="post-item-header">ADD EVENT NAME</Typography>
                                    <TextField className="mt-1" fullWidth variant="outlined" value={positionData.eventName} onChange={(e) => updatePosition("eventName", e.currentTarget.value)} />
                                </Grid>
                                <Grid item sm={4} xs={12} className="mt-1">
                                    <Typography className="post-item-header">UNPAID BREAK</Typography>
                                    <Box className="p-1">
                                        <Autocomplete
                                            fullWidth
                                            options={breakData}
                                            getOptionLabel={(option) => option.title}
                                            value={breakData.filter(it => it.value === positionData.unpaid_break)[0]}
                                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                                            onChange={(e, v) => updatePosition("unpaid_break", v.value)}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xs={12} className="mt-1">
                                    <Typography className="post-item-header">TRANSIT ALLOWANCE</Typography>
                                    <Box className="p-1">
                                        <Autocomplete
                                            fullWidth
                                            options={transitData}
                                            getOptionLabel={(option) => option.title}
                                            value={transitData.filter(it => it.value === positionData.transit_allowance)[0]}
                                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                                            onChange={(e, v) => updatePosition("transit_allowance", v.value)}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="post-item-header">SELECT EVENT ADDRESS</Typography>
                                    <TempAddress addressData={addressData} mainAddress={positionData.address} changeAddress={changeAddress} />
                                    {
                                        !addressFlag ?
                                            <Box className={`p-1 pt-0 d-flex align-items-center color-theme crusor-pointer`} onClick={() => setAddressFlag(!addressFlag)}>
                                                <Add /><Typography className="">ADD NEW ADDRESS</Typography>
                                            </Box>
                                            :
                                            <Box className={`p-1 pt-0 d-flex align-items-center justify-content-between`}>
                                                <TextField fullWidth variant="outlined" onChange={(e) => setTempAddress(e.currentTarget.value)} value={tempAddress} />
                                                <Button fullWidth className="bg-theme color-white ml-1" onClick={() => changeAddress(true)}>Save</Button>
                                            </Box>
                                    }
                                </Grid>
                            </> : <></>
                    }
                    <Grid item xs={12} className="d-flex justify-content-between mt-1">
                        <Button fullWidth className="bg-theme color-white" onClick={() => postShift(false)}>REQUEST DEDICATED POOL</Button>
                        <Button fullWidth className="bg-theme color-white ml-1" onClick={() => postShift(true)}>POST DIRECT SHIFTS</Button>
                    </Grid>
                    <Typography className="mt-1 text-align-center">Please note that 15% admin fee will be added to the rate.</Typography>
                </Grid>
            </Box>
        </Container>
    )
}