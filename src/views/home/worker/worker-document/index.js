import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

export default function WorkerDocument() {

  const data = [
    {
      name: "Government Photo Id",
      count: 2
    },
    {
      name: "Degree / Dipolma / Certificate",
      count: 0
    },
    {
      name: "Professional Licences",
      count: 1
    },
    {
      name: "Resume",
      count: 1
    },
    {
      name: "First Aid / CPR",
      count: 1
    },
    {
      name: "Current COVID-19 Result",
      count: 0
    },
    {
      name: "COVID-19 Vaccination",
      count: 0
    },
    {
      name: "Immunization Record",
      count: 0
    },
    {
      name: "TB Screening",
      count: 0
    },
    {
      name: "Vulnerable Sector Check",
      count: 0
    },
    {
      name: "Current Flu Vaccination",
      count: 1
    },
    {
      name: "Other Vaccinations",
      count: 1
    },
    {
      name: "Food Handler Certificate",
      count: 1
    },
    {
      name: "N95 Mask Fit",
      count: 1
    },
    {
      name: "CPI",
      count: 1
    },
    {
      name: "Smart Serve",
      count: 1
    },
    {
      name: "Work Authorization",
      count: 1
    },
    {
      name: "Additional Documents",
      count: 1
    },
  ]

  return (
    <Container className="mt-1 mb-1">
      <Card className="p-2 theme-border theme-box-shadow">
        <CardContent>
          <Box className="pb-1">
            <Typography className="text-align-center font-weight-bold" variant="h5"> DOCUMENTS </Typography>
          </Box>
          {
            data.map((item, key) => (
              <Box key={key}>
                <Typography>{item.name}</Typography>
                <Grid container className="item" spacing={3}>
                  <Grid item xs={6}>
                    <Button fullWidth className="bg-theme color-white">Upload</Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button fullWidth className={item.count > 0 ? "bg-eee theme-border" : "bg-eee"}>
                      {
                        item.count > 0 ? `Uploaded(${item.count})` : "NOT UPLOADED"
                      }
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            ))
          }
        </CardContent>
      </Card>
    </Container>
  )
}