import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private apiUrl = 'https://localhost:7043/api';
  constructor(private http: HttpClient) { }


  // ===================== PORTFOLIOS =====================

  getProfiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Profiles`);
  }

  getProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Profiles/${id}`);
  }


  createProfile(profiles: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Profiles`, profiles);
  }


  updateProfile(id: number, profiles: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Profiles/${id}`, profiles);
  }

  deleteProfile(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Profiles/${id}`);
  }

  // ===================== EMAILS =====================

  sendMessage(contactData: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Emails`, contactData);
  }
}