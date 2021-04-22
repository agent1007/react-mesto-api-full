class Api {
    constructor ({baseUrl}) {
        this._baseUrl = baseUrl;
    };

    _requestResult(res) {
      if (res.ok) {
      return res.json();
     }
     return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    getInitialCards() {
      return fetch (`${this._baseUrl}/cards`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }
      })
      .then((res) => this._requestResult(res))
    }

    getUserData() {
      return fetch (`${this._baseUrl}/users/me`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }
      })
      .then((res) => this._requestResult(res))
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: data.name,
              link: data.link
            })
          })
          .then((res) => this._requestResult(res))
    }

    removeCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }
      })
      .then((res) => this._requestResult(res))
    }
    

    addCardLike(id){
      return fetch(`${this._baseUrl}/cards/likes/${id}`, {
          method: 'PUT',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        })
        .then((res) => this._requestResult(res))
    }

    deleteCardLike(id){
      return fetch(`${this._baseUrl}/cards/likes/${id}`, {
          method: 'DELETE',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        })
        .then((res) => this._requestResult(res))
    }

    editProfile(data) {
      return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: data.name,
            about: data.about 
          })
        })
        .then((res) => this._requestResult(res))
  }

    changeUserAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            avatar: data.avatar
          })
        })
        .then((res) => this._requestResult(res))
  }

}

const api = new Api({
  baseUrl: 'https://api.cool-mesto.nomoredomains.club'
})


export default api;