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