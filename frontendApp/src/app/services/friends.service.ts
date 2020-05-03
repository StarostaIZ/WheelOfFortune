import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  header = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  getFriends() {
    return this.http.get('http://localhost:8000/friendList').pipe();
  }

  addFriend(friend) {
    return this.http
      .post('http://localhost:8000/addFriend', friend, { headers: this.header })
      .pipe();
  }

  deleteFriend(friend) {
    return this.http
      .post('http://localhost:8000/removeFriend', friend, {
        headers: this.header,
      })
      .pipe();
  }

  getFriendRequest() {
    return this.http
      .get('http://localhost:8000/friendRequestList', { headers: this.header })
      .pipe();
  }

  acceptFriendRequest(friend) {
    return this.http
      .post('http://localhost:8000/acceptFriendRequest', friend, {
        headers: this.header,
      })
      .pipe();
  }

  sendFriendRequest(friend) {
    return this.http
      .post('http://localhost:8000/sendFriendRequest', friend, {
        headers: this.header,
      })
      .pipe();
  }

  rejectFriendRequest(friend) {
    return this.http
      .post('http://localhost:8000/rejectFriendRequest', friend, {
        headers: this.header,
      })
      .pipe();
  }
}
