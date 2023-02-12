# Medical bill upload system.

Start server:
`npm run server`

Send Post request:

```
curl -H 'Content-Type: application/json' \                    
      -d '{ "patient_name":"bob2","address":"17222", "hospital_name": "seattle hospital","data_of_service":"01/01/2023","bill_amount":50}' \
      -X POST \
      http://localhost:3000/items
```

Send Get reqeust:
``` curl http://localhost:3000/items -H "Accept: application/json"```

Before running the command `npm run server` you need to run `npm install` to
install the dependencies
