import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoSlim } from 'src/slim/DemoSlim';
import { ProjectSlim } from '../slim/ProjectSlim';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'api/projects';
  private demoUrl = 'api/demo';

  data = []

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  getAllProjects(): Observable<ProjectSlim[]> {
    return this.httpClient.get<ProjectSlim[]>(this.projectsUrl);
  }

  getAllRecords(): Observable<DemoSlim[]> {
    return this.httpClient.get<DemoSlim[]>(this.demoUrl);
  }

  // getAllRecords(): Observable<any[]>  {
  //   this.httpClient.get<ProjectSlim[]>(this.projectsUrl).toPromise().then(
  //     result => {
  //       this.data = result;
  //       return this.data;
  //     }
  //   );
  //   return null;
  // }

  getProjectsByPaging(pageNumber, pageSize): Observable<ProjectSlim[]> {

    console.log(pageNumber, pageSize);

    let list = this.getAllRecords().toPromise().then(
      result => {
        console.log(result);
      }
    );

    console.log(list);

    return null;
  }

  addProjects(projectSlim: ProjectSlim) {
    return this.httpClient.post(this.projectsUrl, projectSlim);
  }

  updateProjects(projectSlim: ProjectSlim) {
    return this.httpClient.post(this.projectsUrl, projectSlim);
  }

  deleteProjects(id: Number) {
    return this.httpClient.delete(`api/projects/?${id}`);
  }
}
