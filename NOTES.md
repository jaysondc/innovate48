# Innovate48 Hackathon

## Snap Lens Features

- Card Tracking
- "Scan a Card" Prompt
- Date/Time
- Recent Transactions
- *Points Balance*
- *Account Balance*
  - Balance provided by Card Management Payments One Debit
  - in the `GET` call
- Spending Graphs (Bar graphs -> Pie Chart?)
  - Merchant Types provided by Transaction History API
  - https://www.dm.usda.gov/procurement/card/card_x/mcc.pdf
- 3D FIS/WORLDPAY Logo
- FICO score?

## Research Topics

- Find API that has transactions with Transaction Categories (Utilities, Business, Travel, Food, Lifestyle)
- Find API that does Reward Point Balance
- Gift/Debit Card Balance

## Code Connect APIs

### mBanking APIs

### Card Management Payments One Debit

Debit Card Management function for Connex

Card Managemenet
Activate Card
Address Management
Card Ordering
Card State
Transaction History*

**GET Sample Response:**

```yaml
{
  "entity": {
    "dateLastUsed": "2019-02-21T14:15:40.210-06:00",
    "dateLastUpdated": "2019-02-21T14:15:40.210-06:00",
    "dateLastMaintained": "2019-02-21T14:15:40.210-06:00",
    "enterpriseCustomerId": "",
    "pan": {
      "plainText": "1236540789000125",
      "cipherText": "",
      "alias": ""
    },
    "card": {
      "pinFailCount": "00",
      "limitGroup": "APPL00",
      "canWithdraw": "Y",
      "canDeposit": "Y",
      "canInquire": "Y",
      "paymentsTo": "Y",
      "paymentsFrom": "Y",
      "transfersTo": "Y",
      "transfersFrom": "Y",
      "canPurchase": "Y",
      "thirdPartyPymt": "Y",
      "pinOffsetIndicator": "00",
      "pinOffset": "0000",
      "expirationDate": "0011",
      "greetingName": "DOEJOHN",
      "mobileEnrollment": "Y",
      "avsData": "",
      "lastDemographicUpdated": "2019-01-02:10:11:12:1111",
      "cardStatus": {
        "status": {
          "cardStatus": {
            "description": "Pending Activation"
          },
          "prevCardActivationStatus": {
            "description": ""
          },
          "accountStatus": {
            "description": "Active"
          }
        },
        "subStatus": {
          "cardStatus": {
            "subStatus": "null"
          },
          "prevCardActivationStatus": {
            "sunStatis": ""
          },
          "accountStatus": {
            "subStatus": "null"
          }
        },
        "hostValue": {
          "cardStatus": {
            "hostValue": "OK-N"
          },
          "prevCardActivationStatus": {
            "hostValue": ""
          },
          "accountStatus": {
            "hostValue": "OK"
          }
        }
      },
      "prevCardStatus": {
        "status": {
          "cardStatus": {
            "description": "Pending Activation"
          },
          "prevCardActivationStatus": {
            "description": ""
          },
          "accountStatus": {
            "description": "Active"
          }
        },
        "subStatus": {
          "cardStatus": {
            "subStatus": "null"
          },
          "prevCardActivationStatus": {
            "sunStatis": ""
          },
          "accountStatus": {
            "subStatus": "null"
          }
        },
        "hostValue": {
          "cardStatus": {
            "hostValue": "OK-N"
          },
          "prevCardActivationStatus": {
            "hostValue": ""
          },
          "accountStatus": {
            "hostValue": "OK"
          }
        }
      },
      "lastCardStatusUpdated": "2019/01/01",
      "activationStatus": "Y",
      "activationMethod": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "activationTime": "2019-02-03:12:13:11:1111",
      "optOutVauAbuFlag": "Y",
      "prevCardExpirationDate": "1901",
      "prevCardActivationStatus": "N",
      "lastTimePinChanged": "0001-0101:00:00:00.000000",
      "cardMediaType": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "serviceCode": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "cardProfile": "",
      "autoIssueInd": "N",
      "cardAssociation": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "cardType": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "cardSubType": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "customerSince": "20190101",
      "vipInd": "Y",
      "embossedBusiness": "Company Name",
      "cardCategory": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "hasCardCompanionMini": "Y",
      "hasCardCompanionMicro": "Y",
      "hasCardCompanionMobile": "Y",
      "contactPref": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "creditLimit": "12301213",
      "cashLimit": "1239870",
      "pwrOfAttrnyFlag": "Y",
      "pwrOfAttrnyName": "Name",
      "bankBranchNo": "",
      "vruCntrCardAct": "0",
      "vruCntrPinChange": "0",
      "alrtEventNo": "",
      "alrtEventDate": "2019-02-02",
      "alrtEventLtd": "",
      "schdBlockDate": "2020-01-01:12:30:11:000000",
      "severityLvl": "",
      "travelInd": {
        "description": {
          "cardOrderFlag": {
            "description": ""
          },
          "cardOrderStatusFlag": {
            "description": ""
          },
          "cardOrderType": {
            "description": ""
          },
          "activationMethod": {
            "description": "--"
          },
          "cardMediaType": {
            "description": "Mag Stripe Only"
          },
          "serviceCode": {
            "description": "null"
          },
          "cardAssociation": {
            "description": "MasterCard"
          },
          "cardType": {
            "description": "Debit"
          },
          "cardSubType": {
            "description": "Consumer"
          },
          "cardCategory": {
            "description": "Standard"
          },
          "contactPref": {
            "description": "Primary Phone"
          },
          "travelInd": {
            "description": "None"
          },
          "addressType": {
            "description": "Primary"
          },
          "addressFormat": {
            "description": "Domestic US"
          },
          "countryCode": {
            "description": "United States of America"
          },
          "phoneType": {
            "description": "Primary"
          },
          "cardOrdFlag": {
            "description": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "description": "New Order"
          },
          "cardOrdType": {
            "description": "Issue new card immediately"
          },
          "languageInd": {
            "description": "English"
          },
          "accountType": {
            "description": "Checking"
          },
          "oarSelectType": {
            "description": "Demand Depostit Account"
          },
          "overdraftAccountType": {
            "description": ""
          }
        },
        "hostValue": {
          "cardOrderFlag": {
            "hostValue": "B"
          },
          "cardOrderStatusFlag": {
            "hostValue": "1"
          },
          "cardOrderType": {
            "hostValue": "1"
          },
          "activationMethod": {
            "hostValue": "X"
          },
          "cardMediaType": {
            "hostValue": "MS"
          },
          "serviceCode": {
            "hostValue": "null"
          },
          "cardAssociation": {
            "hostValue": "MasterCard"
          },
          "cardType": {
            "hostValue": "DR"
          },
          "cardSubType": {
            "hostValue": "CO"
          },
          "cardCategory": {
            "hostValue": "ST"
          },
          "contactPref": {
            "hostValue": "H"
          },
          "travelInd": {
            "hostValue": "N"
          },
          "addressType": {
            "hostValue": "P"
          },
          "addressFormat": {
            "hostValue": "D"
          },
          "countryCode": {
            "hostValue": "045"
          },
          "phoneType": {
            "hostValue": "P"
          },
          "cardOrdFlag": {
            "hostValue": "B"
          },
          "cardOrdStatFlag": {
            "hostValue": "1"
          },
          "cardOrdType": {
            "hostValue": "1"
          },
          "languageInd": {
            "hostValue": "EN"
          },
          "accountType": {
            "hostValue": "DDA"
          },
          "oarSelectType": {
            "hostValue": "DDA"
          },
          "overdraftAccountType": {
            "hostValue": ""
          }
        },
        "hostDescription": {
          "cardOrderFlag": {
            "hostDescription": ""
          },
          "cardOrderStatusFlag": {
            "hostDescription": ""
          },
          "cardOrderType": {
            "hostDescription": ""
          },
          "activationMethod": {
            "hostDescription": "Waiting activation"
          },
          "cardMediaType": {
            "hostDescription": "Mag Stripe Only"
          },
          "serviceCode": {
            "hostDescription": "null"
          },
          "cardAssociation": {
            "hostDescription": "M"
          },
          "cardType": {
            "hostDescription": "Debit"
          },
          "cardSubType": {
            "hostDescription": "Consumer"
          },
          "cardCategory": {
            "hostDescription": "Standard"
          },
          "contactPref": {
            "hostDescription": "Primary Phone"
          },
          "travelInd": {
            "hostDescription": "None"
          },
          "addressType": {
            "hostDescription": "Primary"
          },
          "addressFormat": {
            "hostDescription": "Domestic US"
          },
          "countryCode": {
            "hostDescription": "UK"
          },
          "phoneType": {
            "hostDescription": "Primary"
          },
          "cardOrdFlag": {
            "hostDescription": "Card and PIN"
          },
          "cardOrdStatFlag": {
            "hostDescription": "New Order"
          },
          "cardOrdType": {
            "hostDescription": "Issue new card immediately"
          },
          "languageInd": {
            "hostDescription": "English"
          },
          "accountType": {
            "hostDescription": "Checking"
          },
          "oarSelectType": {
            "hostDescription": "Demand Deposit Account"
          },
          "overdraftAccountType": {
            "hostDescription": ""
          }
        }
      },
      "travelStartDate": "2019-12-12",
      "travelEndDate": "2020-01-01",
      "addresses": [
        {
          "lastAddressUpdated": "2019-11-20:11:16:58.220000",
          "addressType": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "addressFormat": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "addressLine1": "12365 STREET ROAD",
          "addressLine2": "98745 SECOND STREET ROAD",
          "addressLine3": "",
          "addressLine4": "FOURTH ADDRESS LINE FROM ADDRESS ONE",
          "city": "NEW YORK",
          "stateProvince": "FL",
          "postalCode": "00001",
          "countryCode": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "beginUsageDate": "2019-01-01",
          "endUsageDate": "2019-01-02"
        }
      ],
      "members": [
        {
          "lastMemberUpdated": "2020-01-08:16:10:25.310000",
          "memberNum": "00",
          "isPrimaryContact": "Y",
          "firstName": "JOHN",
          "lastName": "DOE",
          "middleInitial": "Z",
          "prefix": "MR",
          "suffix": "",
          "embossedName": "",
          "cardOrdFlag": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "cardOrdStatFlag": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "cardOrdStatDate": "2020-01-01",
          "cardOrdType": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "cardReplInd": "Y",
          "dateOrigIssued": "2020-12-01",
          "dateLastIssued": "2019-01-01",
          "cardStockCode": "",
          "flatCardInd": "Y",
          "issuerStockCode": "",
          "customImageId": "IMAGEOFSOMETHING.PNG",
          "photoId": "Y",
          "imageId": "IMAGEOFNOTHING.JPG",
          "userValidation": "",
          "dateOfBirth": "2019-01-01",
          "socialSecurityNumber": "",
          "motherMaidenName": "MOTHERS NAME",
          "passcode": "",
          "trackNameMatch": "",
          "languageInd": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "emailAddress1": "EMAILSOMETHING@EMAIL.COM",
          "emailAddress2": "",
          "militaryFlag": "N",
          "militaryStartDate": "2020-01-01",
          "militaryEndDate": "2020-01-02",
          "phones": [
            {
              "phoneNum": "1234567891",
              "phoneType": {
                "description": {
                  "cardOrderFlag": {
                    "description": ""
                  },
                  "cardOrderStatusFlag": {
                    "description": ""
                  },
                  "cardOrderType": {
                    "description": ""
                  },
                  "activationMethod": {
                    "description": "--"
                  },
                  "cardMediaType": {
                    "description": "Mag Stripe Only"
                  },
                  "serviceCode": {
                    "description": "null"
                  },
                  "cardAssociation": {
                    "description": "MasterCard"
                  },
                  "cardType": {
                    "description": "Debit"
                  },
                  "cardSubType": {
                    "description": "Consumer"
                  },
                  "cardCategory": {
                    "description": "Standard"
                  },
                  "contactPref": {
                    "description": "Primary Phone"
                  },
                  "travelInd": {
                    "description": "None"
                  },
                  "addressType": {
                    "description": "Primary"
                  },
                  "addressFormat": {
                    "description": "Domestic US"
                  },
                  "countryCode": {
                    "description": "United States of America"
                  },
                  "phoneType": {
                    "description": "Primary"
                  },
                  "cardOrdFlag": {
                    "description": "Card and PIN"
                  },
                  "cardOrdStatFlag": {
                    "description": "New Order"
                  },
                  "cardOrdType": {
                    "description": "Issue new card immediately"
                  },
                  "languageInd": {
                    "description": "English"
                  },
                  "accountType": {
                    "description": "Checking"
                  },
                  "oarSelectType": {
                    "description": "Demand Depostit Account"
                  },
                  "overdraftAccountType": {
                    "description": ""
                  }
                },
                "hostValue": {
                  "cardOrderFlag": {
                    "hostValue": "B"
                  },
                  "cardOrderStatusFlag": {
                    "hostValue": "1"
                  },
                  "cardOrderType": {
                    "hostValue": "1"
                  },
                  "activationMethod": {
                    "hostValue": "X"
                  },
                  "cardMediaType": {
                    "hostValue": "MS"
                  },
                  "serviceCode": {
                    "hostValue": "null"
                  },
                  "cardAssociation": {
                    "hostValue": "MasterCard"
                  },
                  "cardType": {
                    "hostValue": "DR"
                  },
                  "cardSubType": {
                    "hostValue": "CO"
                  },
                  "cardCategory": {
                    "hostValue": "ST"
                  },
                  "contactPref": {
                    "hostValue": "H"
                  },
                  "travelInd": {
                    "hostValue": "N"
                  },
                  "addressType": {
                    "hostValue": "P"
                  },
                  "addressFormat": {
                    "hostValue": "D"
                  },
                  "countryCode": {
                    "hostValue": "045"
                  },
                  "phoneType": {
                    "hostValue": "P"
                  },
                  "cardOrdFlag": {
                    "hostValue": "B"
                  },
                  "cardOrdStatFlag": {
                    "hostValue": "1"
                  },
                  "cardOrdType": {
                    "hostValue": "1"
                  },
                  "languageInd": {
                    "hostValue": "EN"
                  },
                  "accountType": {
                    "hostValue": "DDA"
                  },
                  "oarSelectType": {
                    "hostValue": "DDA"
                  },
                  "overdraftAccountType": {
                    "hostValue": ""
                  }
                },
                "hostDescription": {
                  "cardOrderFlag": {
                    "hostDescription": ""
                  },
                  "cardOrderStatusFlag": {
                    "hostDescription": ""
                  },
                  "cardOrderType": {
                    "hostDescription": ""
                  },
                  "activationMethod": {
                    "hostDescription": "Waiting activation"
                  },
                  "cardMediaType": {
                    "hostDescription": "Mag Stripe Only"
                  },
                  "serviceCode": {
                    "hostDescription": "null"
                  },
                  "cardAssociation": {
                    "hostDescription": "M"
                  },
                  "cardType": {
                    "hostDescription": "Debit"
                  },
                  "cardSubType": {
                    "hostDescription": "Consumer"
                  },
                  "cardCategory": {
                    "hostDescription": "Standard"
                  },
                  "contactPref": {
                    "hostDescription": "Primary Phone"
                  },
                  "travelInd": {
                    "hostDescription": "None"
                  },
                  "addressType": {
                    "hostDescription": "Primary"
                  },
                  "addressFormat": {
                    "hostDescription": "Domestic US"
                  },
                  "countryCode": {
                    "hostDescription": "UK"
                  },
                  "phoneType": {
                    "hostDescription": "Primary"
                  },
                  "cardOrdFlag": {
                    "hostDescription": "Card and PIN"
                  },
                  "cardOrdStatFlag": {
                    "hostDescription": "New Order"
                  },
                  "cardOrdType": {
                    "hostDescription": "Issue new card immediately"
                  },
                  "languageInd": {
                    "hostDescription": "English"
                  },
                  "accountType": {
                    "hostDescription": "Checking"
                  },
                  "oarSelectType": {
                    "hostDescription": "Demand Deposit Account"
                  },
                  "overdraftAccountType": {
                    "hostDescription": ""
                  }
                }
              },
              "firstCallInd": "Y",
              "secondCallInd": "N"
            }
          ]
        }
      ],
      "previousCards": [
        {
          "pan": "",
          "plastic": "",
          "order": 1
        }
      ],
      "replacedByCards": [
        {
          "pan": "",
          "plastic": "",
          "order": 1
        }
      ],
      "accounts": [
        {
          "financialInstitutionID": "1000000001",
          "accountNumber": "12345",
          "accountType": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "accountQualifier": "",
          "oarSelectType": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          },
          "accountDescription": "PERSONAL LOAN ACCOUNT",
          "canAccountWithdraw": "Y",
          "canAccountDeposit": "Y",
          "canAccountInquiry": "Y",
          "paymentsToAccount": "Y",
          "paymentsFromAccount": "Y",
          "transferToAccount": "Y",
          "transferFromAccount": "Y",
          "canAccountPurchase": "Y",
          "thirdPartyPayments": "Y",
          "primaryIndicator": "Y",
          "fundingIndicator": "Y",
          "ledgerBalance": "0.00",
          "availableBalance": "0.00",
          "creditLineAmount": "0.00",
          "lastTransactionTstamp": "2019-02-21T14:15:40.210-06:00",
          "accountStatus": {
            "status": {
              "cardStatus": {
                "description": "Pending Activation"
              },
              "prevCardActivationStatus": {
                "description": ""
              },
              "accountStatus": {
                "description": "Active"
              }
            },
            "subStatus": {
              "cardStatus": {
                "subStatus": "null"
              },
              "prevCardActivationStatus": {
                "sunStatis": ""
              },
              "accountStatus": {
                "subStatus": "null"
              }
            },
            "hostValue": {
              "cardStatus": {
                "hostValue": "OK-N"
              },
              "prevCardActivationStatus": {
                "hostValue": ""
              },
              "accountStatus": {
                "hostValue": "OK"
              }
            }
          },
          "overdraftAmount": "0.00",
          "overdraftFinancialInstitutionID": "",
          "overdraftAccountNumber": "",
          "overdraftAccountType": {
            "description": {
              "cardOrderFlag": {
                "description": ""
              },
              "cardOrderStatusFlag": {
                "description": ""
              },
              "cardOrderType": {
                "description": ""
              },
              "activationMethod": {
                "description": "--"
              },
              "cardMediaType": {
                "description": "Mag Stripe Only"
              },
              "serviceCode": {
                "description": "null"
              },
              "cardAssociation": {
                "description": "MasterCard"
              },
              "cardType": {
                "description": "Debit"
              },
              "cardSubType": {
                "description": "Consumer"
              },
              "cardCategory": {
                "description": "Standard"
              },
              "contactPref": {
                "description": "Primary Phone"
              },
              "travelInd": {
                "description": "None"
              },
              "addressType": {
                "description": "Primary"
              },
              "addressFormat": {
                "description": "Domestic US"
              },
              "countryCode": {
                "description": "United States of America"
              },
              "phoneType": {
                "description": "Primary"
              },
              "cardOrdFlag": {
                "description": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "description": "New Order"
              },
              "cardOrdType": {
                "description": "Issue new card immediately"
              },
              "languageInd": {
                "description": "English"
              },
              "accountType": {
                "description": "Checking"
              },
              "oarSelectType": {
                "description": "Demand Depostit Account"
              },
              "overdraftAccountType": {
                "description": ""
              }
            },
            "hostValue": {
              "cardOrderFlag": {
                "hostValue": "B"
              },
              "cardOrderStatusFlag": {
                "hostValue": "1"
              },
              "cardOrderType": {
                "hostValue": "1"
              },
              "activationMethod": {
                "hostValue": "X"
              },
              "cardMediaType": {
                "hostValue": "MS"
              },
              "serviceCode": {
                "hostValue": "null"
              },
              "cardAssociation": {
                "hostValue": "MasterCard"
              },
              "cardType": {
                "hostValue": "DR"
              },
              "cardSubType": {
                "hostValue": "CO"
              },
              "cardCategory": {
                "hostValue": "ST"
              },
              "contactPref": {
                "hostValue": "H"
              },
              "travelInd": {
                "hostValue": "N"
              },
              "addressType": {
                "hostValue": "P"
              },
              "addressFormat": {
                "hostValue": "D"
              },
              "countryCode": {
                "hostValue": "045"
              },
              "phoneType": {
                "hostValue": "P"
              },
              "cardOrdFlag": {
                "hostValue": "B"
              },
              "cardOrdStatFlag": {
                "hostValue": "1"
              },
              "cardOrdType": {
                "hostValue": "1"
              },
              "languageInd": {
                "hostValue": "EN"
              },
              "accountType": {
                "hostValue": "DDA"
              },
              "oarSelectType": {
                "hostValue": "DDA"
              },
              "overdraftAccountType": {
                "hostValue": ""
              }
            },
            "hostDescription": {
              "cardOrderFlag": {
                "hostDescription": ""
              },
              "cardOrderStatusFlag": {
                "hostDescription": ""
              },
              "cardOrderType": {
                "hostDescription": ""
              },
              "activationMethod": {
                "hostDescription": "Waiting activation"
              },
              "cardMediaType": {
                "hostDescription": "Mag Stripe Only"
              },
              "serviceCode": {
                "hostDescription": "null"
              },
              "cardAssociation": {
                "hostDescription": "M"
              },
              "cardType": {
                "hostDescription": "Debit"
              },
              "cardSubType": {
                "hostDescription": "Consumer"
              },
              "cardCategory": {
                "hostDescription": "Standard"
              },
              "contactPref": {
                "hostDescription": "Primary Phone"
              },
              "travelInd": {
                "hostDescription": "None"
              },
              "addressType": {
                "hostDescription": "Primary"
              },
              "addressFormat": {
                "hostDescription": "Domestic US"
              },
              "countryCode": {
                "hostDescription": "UK"
              },
              "phoneType": {
                "hostDescription": "Primary"
              },
              "cardOrdFlag": {
                "hostDescription": "Card and PIN"
              },
              "cardOrdStatFlag": {
                "hostDescription": "New Order"
              },
              "cardOrdType": {
                "hostDescription": "Issue new card immediately"
              },
              "languageInd": {
                "hostDescription": "English"
              },
              "accountType": {
                "hostDescription": "Checking"
              },
              "oarSelectType": {
                "hostDescription": "Demand Deposit Account"
              },
              "overdraftAccountType": {
                "hostDescription": ""
              }
            }
          }
        }
      ]
    }
  },
  "metadata": {
    "msgLst": [
      {
        "code": "00",
        "text": "SUCCESS",
        "type": "APPLICATION_ERROR",
        "severity": "Info"
      }
    ]
  }
}
```



### Transaction History

API to obtain transaction history Information for a specific card number

Use this API to view transaction history for a specified card, debit card, or prepaid cdard account. You can retrieve a maximum of 20 transactions in the last 30 days

**Sample Response:**

```yaml
{
  "sample": {
    "summary": "Sample Response",
    "value": {
      "entity": {
        "transaction": {
          "account1": "2426114290",
          "accountNumber": "5287493000004200",
          "accountNumberPrefix": "528749",
          "accountNumberSuffix": "4200",
          "acquirerBank": "845101410",
          "acquirerBusiness": "01BECU00",
          "acquirerCountryCode": "840",
          "acquirerDate": "20191205'",
          "acquirerEntity": "845101410",
          "acquirerGroup": "CUSA,",
          "acquirerImpact": "2",
          "acquirerInstitution": "845101410",
          "acquirerLink": "PRK285",
          "acquirerProcessor": "PRK285",
          "acquirerTerminal": "WA033016",
          "actionCode": "000",
          "authCode": "001957",
          "authorizationLifeCycleCode": "0",
          "authorizedBy": "I",
          "availableBalance": "101788",
          "cardAcceptorID": "BLANK",
          "cardAcceptorTerminal": "WA033016",
          "cardholderBillingAmount": "2000",
          "cardOwner": "01,",
          "cardSequenceNumber": "000",
          "cardType": "D",
          "conversionRateAcquirer": "1",
          "conversionRateCardholderBilling": "1",
          "conversionRateIssuer": "1",
          "conversionRateNet": "1",
          "dateAction": "20",
          "dateExpiration": "2310",
          "dateSettlement": "20191205",
          "deviceTypeChannel": "02",
          "financialType": "010",
          "functionCode": "200",
          "issuerAccountTypes": "2000",
          "issuerBank": "845101410",
          "issuerDate": "20191205",
          "issuerEntity": "845101410",
          "issuerGroup": "CUSA",
          "issuerImpact": "1",
          "issuerInstitution": "845101410",
          "issuerLink": "PRK285",
          "issuerProcessor": "PRK285",
          "ledgerBalance": "101788",
          "localDateTime": "20191205124911",
          "merchantCountryCode": "USA",
          "merchantCountrySubEntityCode": "WA",
          "merchantName": "B E C U",
          "merchantPostalCode": "98168",
          "merchantType": "6011",
          "originalReconciliationAmount": "0",
          "originalTransactionAmount": "0",
          "physicalMID": "01BECU00",
          "physicalTID": "WA033016",
          "pinBypassFlag": "N",
          "pinResult": "-2",
          "platform": "A",
          "posCardCaptureCapability": "0",
          "posCardholderAuthenticationEntity": "0",
          "posCardholderPresent": "0",
          "posCardholderVerificationCapability": "1",
          "posCardholderVerificationMethod": "0",
          "posCardPresent": "1",
          "posCardReadingCapability": "U",
          "posCardReadingMethod": "5",
          "posEnvironment": "2",
          "posMagneticStripeRewriteCapability": "1",
          "posPinInputLengthCapability": "C",
          "posTerminalOutputCapability": "1",
          "processBillingFlag1": "NNNNNYNNNNNYYNNN",
          "processBillingFlag2": "NNNNNNNYNYNYYNNN",
          "processBillingFlag3": "NNYNNNYNNNNNNNNN",
          "processBillingFlag4": "NYYNNNNNNNNNNNNN",
          "processFlag1": "YNYNNNNNYNNYYYNN",
          "processFlag2": "NNYNNNNNNNNYNNNN",
          "processFlag3": "NYNYNNYNNNNNNNYY",
          "processFlag4": "NNNYYNNNNYNYNYNY",
          "reconciliationAmount": "2000",
          "retrievalReferenceNumber": "000000001762",
          "role": "N",
          "serviceCode": "201",
          "systemTraceAuditNumber": "001957",
          "terminalClass": "02",
          "transactionAmount": "2000",
          "transactionDateTime": "2019120514491199",
          "transactionDisposition": "1",
          "transactionType": "0100002000",
          "MCC": "6011",
          "CVV": "P",
          "ATM": "WA033016",
          "CPPCardAcceptorID": "BLANK",
          "CPPCardAcceptorTerminal": "WA033016",
          "MTI": "1210"
        }
      },
      "metadata": {
        "msgLst": [
          {
            "code": "00",
            "text": "SUCCESS"
          }
        ]
      }
    }
  }
}
```



### Loyalty and Rewards (Scorecard)

Use this API to view Reward Point balance information for a specified card number. You can also view monthly earnings, the month earnings were redeemed, and the balance upon card expiration along with the expiration date. Supported platform(s): Credit and Debit

**Sample Response:**

```yaml
{
  "entity": {
    "accountInfo": {
      "status": "Active",
      "currencyType": "USD",
      "currentBalance": "0.00",
      "monthEarnings": "0.00",
      "monthRedeemed": "string",
      "expireBalance": "0.00",
      "expireDate": "20191205"
    }
  },
  "metadata": {
    "messages": [
      {
        "code": "00",
        "text": "SUCCESS",
        "type": "string",
        "severity": "string"
      }
    ]
  }
}
```