export const paymentTermsOptions = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"]
export const initialValues = {
    "id": "",
    "createdAt": "",
    "paymentDue": "",
    "description": "",
    "paymentTerms": null,
    "clientName": "",
    "clientEmail": "",
    "status": "",
    "senderAddress": {
        "street": "",
        "city": "",
        "postCode": "",
        "country": ""
    },
    "clientAddress": {
        "street": "",
        "city": "",
        "postCode": "",
        "country": ""
    },
    "items": [
        {
            "name": "",
            "quantity": null,
            "price": null,
            "total": null
        }
    ],
    "total": null
}