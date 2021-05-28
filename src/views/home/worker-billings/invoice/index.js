import React from "react"
import Box from "@material-ui/core/Box"
import Invoices from "./invoice"

export default function WorkerBillingPaymentHistory() {
  return (
    <Box className="worker-billing-invoice">
        <Invoices />
    </Box>
  )
}