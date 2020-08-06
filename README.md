<h1 align="center">Welcome to Contacts API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/DaBusyB/contactsAPI#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/DaBusyB/contactsAPI/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/DaBusyB/contactsAPI/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/DaBusyB/Contacts API" />
  </a>
  <a href="https://twitter.com/DaBusyB" target="_blank">
    <img alt="Twitter: DaBusyB" src="https://img.shields.io/twitter/follow/DaBusyB.svg?style=social" />
  </a>
</p>

> A simple API to manage your contacts. This was created using Node, Express, SQLite and Knex.

### 🏠 [Homepage](https://github.com/DaBusyB/contactsAPI#readme)

## Install

```sh
npm install
```

## Usage

```sh
npm start

Use [Postman](https://www.postman.com/downloads/) to view routes
```



## Routes and Expected Output
```sh
*****
List All Contacts: http://localhost:4001/contacts/
*****
JSON
[
  {
      "id": 1,
      "name": "Viola Davis",
      "number": 3017660448,
      "email": "viola@violadavis.com"
  },
  {
      "id": 2,
      "name": "Nell Carter",
      "number": 2028999411,
      "email": "mscarter@gimmeabreak.com"
  },
  {
      "id": 3,
      "name": "Issa Rae",
      "number": 4102229876,
      "email": "issa@rae.com"
  },
  {
      "id": 7,
      "name": "Eartha Kitt",
      "number": 9194899231,
      "email": "kittn@earthakitt.com"
  }
]

*****
List Contacts by Their ID: http://localhost:4001/contacts/<id>
*****
JSON
[
    {
        "id": 1,
        "name": "Viola Davis",
        "number": 3017660448,
        "email": "viola@violadavis.com"
    }
]

*****
Add a Contact: http://localhost:4001/
*****
*ensure body settings are raw JSON*
JSON
[
  <id of new entry>
]

*****
Edit a Contact: http://localhost:4001/<id>
*****
JSON
{
  "updated": <number of entries updated>
}

*****
Delete a Contact: http://localhost:4001/<id>
*****
JSON
{
  "deleted": <number of entries deleted>
}
```


## Run tests
```sh
testing coming soon
```


## Author

👤 **Brandi Apetsi**

* Website: BrandiApetsi.com(https:Brandiapetsi.com)
* Twitter: [@DaBusyB](https://twitter.com/DaBusyB)
* Github: [@DaBusyB](https://github.com/DaBusyB)
* LinkedIn: [brandi-apetsi](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/brandi-apetsi\/)

## 🤝 Contributing

Contributions and suggestions are welcome!

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Free to copy and or use


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_