export const locationData = [
    { title: 'Chiropractor', value: 1 },
    { title: 'Chiropractic  Assistant', value: 2 },
    { title: 'Dietary Aide', value: 3 },
    { title: 'Dentist', value: 4 },
    { title: 'Dental Hygienist', value: 5 },
    { title: 'Dental Assistant', value: 6 },
    { title: 'Health Care Aide', value: 7 },
    { title: 'Home Health Aide', value: 8 },
    { title: 'Laboratory Technician', value: 9 },
    { title: 'Massage Therapist', value: 10 },
    { title: 'Nurse Practitioner', value: 11 },
    { title: 'Occupational Therapist', value: 12 },
    { title: 'Occupational Therapy Assistant', value: 13 },
    { title: 'Osteopath', value: 14 },
    { title: 'Physical Therapist', value: 15 },
    { title: 'Physical Therapy Assistant', value: 16 },
    { title: 'Psychiatrist', value: 17 },
    { title: 'Psychiatry Physician Assistant', value: 18 },
    { title: 'Psychologist', value: 19 },
    { title: 'Physician ', value: 20 },
    { title: 'Physician Assistant', value: 21 },
    { title: 'Pharmacist', value: 22 },
    { title: 'Pharmacy Assistant', value: 23 },
    { title: 'Physiotherapist', value: 24 },
    { title: 'Physiotherapy Assistant', value: 25 },
    { title: 'Personal Support Worker / Personal Care Aide', value: 26 },
    { title: 'Registered Nurse', value: 27 },
    { title: 'Registered Practical Nurse', value: 28 },
    { title: 'Radiologist', value: 29 },
    { title: 'Radiographer', value: 30 },
    { title: 'Residential Care Aide', value: 31 },
    { title: 'Speech Language Therapist', value: 32 },
]

export const permissionData = {
    client: "client",
    worker: "worker"
}

export const urlData = {
    login: [
        "/login",
        "/register",
        "/recover-password",
        "/confirm-user",
        "/client-register",
        "/worker-register",
    ],
    
    auth: [
        "/set-password",
        "/set-nitification",

        // "/how-it-works",
        // "/downloads",
        // "/about-us",
        // "/faq",
        // "/contact-us"
    ],

    worker: [
        "/worker-home",
        "/worker-profile",
        "/worker-document",
        "/worker-reference",
        "/worker-shift-progress",
        "/worker-upcoming-shifts",
        "/worker-shift-history",
        "/worker-shift-available",
        "/worker-billing-invoice",
        "/worker-billing-instant",
        "/worker-billing-report",
        "/worker-billing-tax",
        "/set-available",
        "/set-rate",
        "/set-distance"
    ],

    client: [
        "/client-home",
        "/client-profile",
        "/client-shift-progress",
        "/client-shifts-schedule",
        "/client-shift-posted",
        "/client-dedicated-posted",
        "/client-shift-history",
        "/client-post",
        "/previous-workers",
        "/client-wallet",
        "/client-billing-history",
        "/client-invoice",
        "/client-add-card",
        "/client-statement"
    ]
}

export const workerDocument = [
    {
        id: 1,
        title: "Government Photo ID",
    },
    {
        id: 2,
        title: "Degree / Diploma / Certificate",
    },
    {
        id: 3,
        title: "Professional Licences",
    },
    {
        id: 4,
        title: "Resume",
    },
    {
        id: 5,
        title: "First Aid / CPR",
    },
    {
        id: 6,
        title: "Current COVID-19 Result",
    },
    {
        id: 7,
        title: "COVID-19 Vaccination",
    },
    {
        id: 8,
        title: "Immunization Record",
    },
    {
        id: 9,
        title: "TB Screening",
    },
    {
        id: 10,
        title: "Vulnerable Sector Check",
    },
    {
        id: 11,
        title: "Current Flu Vaccination",
    },
    {
        id: 12,
        title: "Other Vaccinations",
    },
    {
        id: 13,
        title: "Food Handler Certificate",
    },
    {
        id: 14,
        title: "N95 Mask Fit",
    },
    {
        id: 15,
        title: "CPI",
    },
    {
        id: 16,
        title: "Smart Serve",
    },
    {
        id: 17,
        title: "Work Authorization",
    },
    {
        id: 18,
        title: "Additional Documents",
    }
]

export const breakData = [
    { title: 'No Break', value: 0 },
    { title: '30 Minute', value: 1 },
    { title: '45 Minute', value: 2 },
    { title: '60 Minute', value: 3 },
    { title: '120 Minute', value: 4 },
]

export const transitData = [
    { title: 'None', value: 0 },
    { title: '1 Hour', value: 1 },
    { title: '2 Hour', value: 2 },
    { title: '3 Hour', value: 3 },
    { title: '4 Hour', value: 4 },
    { title: '5 Hour', value: 5 },
    { title: '6 Hour', value: 6 },
    { title: '7 Hour', value: 7 },
    { title: '8 Hour', value: 8 },
    { title: '9 Hour', value: 9 },
    { title: '10 Hour', value: 10 },
]

export const dutyData = [
    { title: 'Floor Duty', value: 0 },
    { title: 'One On One', value: 1 },
    { title: 'Companion', value: 2 }
]