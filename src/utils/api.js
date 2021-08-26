const { API } = require('../backend');

export const createUser = (name, pan, dob, phoneNumber, email) => {
  const details = { name, pan, dob, phoneNumber, email };
  return fetch(`${API}/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization:`Bearer ${token}`
    },
    body: JSON.stringify(details),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));

  //This function will return data in below fomat:
  {
    // {
    //     "email": "test1@gmail.com",
    //     "accountHolderId": "73ff54fb-bb78-42c0-a735-7e46a993139a",
    //     "assets": 0,
    //     "contingencies": 0,
    //     "coins": 100,
    //     "debt": 0,
    //     "risk": 0,
    //     "liability": 0,
    //     "ignorance": 10,
    //     "awareness": 10,
    //     "health": 100,
    //     "financialData": {
    //         "id": 2,
    //         "epf": 0.0,
    //         "savings": 0.0,
    //         "fd": 0.0,
    //         "mutualFunds": 0.0,
    //         "usStocks": 0.0,
    //         "lifeInsurance": 0.0,
    //         "healthInsurance": 0.0,
    //         "creditScore": 0.0,
    //         "expenses": 0.0,
    //         "loans": 0.0,
    //         "creditCard": 0.0
    //     }
    // }
  }
};

export const getUser = (email) => {
  return fetch(`${API}/user/${email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization:`Bearer ${token}`
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));

  //This function will return data in below fomat:
};

export const addFunds = (accountHolderId, amount) => {
  return fetch(
    `${API}/fusion/zetaHacks/accountHolder/${accountHolderId}/add/${amount}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization:`Bearer ${token}`
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));

  //This function will return data in below fomat:
  {
    // {
    //     "requestID": "24014b50-08fd-4da8-9860-581553245914",
    //     "transferID": "20210826183153365_295348_24014b50-08fd-4da8-9860-581553245914",
    //     "message": null,
    //     "status": "SUCCESS",
    //     "isRetriableFailure": null
    // }
  }
};

export const deductFunds = (accountHolderId, amount) => {
  return fetch(
    `${API}/fusion/zetaHacks/accountHolder/${accountHolderId}/deduct/${amount}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization:`Bearer ${token}`
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));

  //This function will return data in below fomat:
  {
    // {
    //     "requestID": "5a13c410-695a-4826-bfce-e43c2d5dba01",
    //     "transferID": "20210826183321505_144009_5a13c410-695a-4826-bfce-e43c2d5dba01",
    //     "message": null,
    //     "status": "SUCCESS",
    //     "isRetriableFailure": null
    // }
  }
};

export const getAllAccountBalance = (accountHolderId) => {
  return fetch(
    `${API}/fusion/zetaHacks/accountHolder/${accountHolderId}/accounts/balance`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization:`Bearer ${token}`
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));

  //This function will return data in below fomat:
  {
    // {
    //     "balance": 170.0
    // }
  }
};
