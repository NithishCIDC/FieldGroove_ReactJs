export const LoginConstant =
{
    navItem1: "Features",
    navItem2: "Industries",
    navItem3: "FAQS",
    navItem4: "Contact us",
    navItem5: "Sign up",
    navItem6: "Login",
    FooterPara: "Create an account to start managing your company. Click the \"Create New Account\" button below to get started",
    FooterEmail: "sales@fieldgroove.com",
    FooterPhone: "212-537-0218"
}
export const initialValue = {
    firstname: "",
    lastname: "",
    companyname: "",
    phone: "",
    email: "",
    password: "",
    passwordagain: "",
    timezone: "Central Standard Time",
    streetaddress1: "",
    streetaddress2: "",
    city: "",
    state: "",
    zip: "",
}
export const accountFields = [
    { label: "First Name", name: "firstname", type: "text" },
    { label: "Last Name", name: "lastname", type: "text" },
    { label: "Company Name", name: "companyname", type: "text" },
    { label: "Phone", name: "phone", type: "text" },
    { label: "Email", name: "email", type: "text" },
    { label: "Password", name: "password", type: "password" },
    { label: "Password Again", name: "passwordagain", type: "password" },
    { label: "Time Zone", name: "timezone", type: "select", options: ["Central Standard Time", "Eastern Standard Time", "Mountain Standard Time", "Pacific Standard Time"] }
];

export const addressFields = [
    { label: "Street Address 1", name: "streetaddress1", type: "text" },
    { label: "Street Address 2", name: "streetaddress2", type: "text" },
    { label: "City", name: "city", type: "text" },
    { label: "State", name: "state", type: "text" },
    { label: "Zip", name: "zip", type: "text" }
];

export const formFields = [
    { name: "email", type: "text", label: "Email" },
    { name: "password", type: "password", label: "Password" },
];

export const LeadformFields = [
    { type: 'text', placeholder: 'Search Leads...' },
    { type: 'select', options: ['Select an Action', 'One', 'Two', 'Three'] },
    { type: 'select', options: ['Select a Type', 'One', 'Two', 'Three'] },
    { type: 'select', options: ['Select a Status', 'One', 'Two', 'Three'] },
    { type: 'select', options: ['Select a Sales Person', 'One', 'Two', 'Three'] },
];

export const customStyles = {
    rows: {
        style: {
            '&:nth-of-type(odd)': {
                backgroundColor: '#f3f3f3',
            },
            '&:hover': {
                backgroundColor: '#e0e0e0',
            },
        },
    },
    headCells: {
        style: {
            fontSize: '16px', // header font size
        },
    },
    cells: {
        style: {
            fontSize: '16px', // cell font size
        },
    },
};





