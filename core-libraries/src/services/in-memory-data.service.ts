import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { DemoSlim } from 'src/slim/DemoSlim';
import { ProjectSlim } from '../slim/ProjectSlim';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const projects = [
      new ProjectSlim(11, 'Project 11', 'J$B(YAxq'),
      new ProjectSlim(12, 'Project 12', 'c5hr)5JA'),
      new ProjectSlim(13, 'Project 13', 'c5vc)5JE'),
      new ProjectSlim(14, 'Project 14', 'c5kj)5JX'),
      new ProjectSlim(15, 'Project 15', 'u8hr)5JO'),
      // new ProjectSlim(16, 'Project 16', '9p*r)5JK'),
      // new ProjectSlim(17, 'Project 17', 'qs9r)5JI'),
      // new ProjectSlim(18, 'Project 18', 'ol$rg5JQ'),
      // new ProjectSlim(19, 'Project 19', 'c5%r)7JD'),
      // new ProjectSlim(20, 'Project 20', 'd9hr#9JE'),
      // new ProjectSlim(21, 'Project 21', 'c5vc)5KE'),
      // new ProjectSlim(22, 'Project 22', 'c5vc)5KE'),
      // new ProjectSlim(23, 'Project 23', 'c5vc)5KE'),
      // new ProjectSlim(24, 'Project 24', 'c5vc)5KE'),
      // new ProjectSlim(25, 'Project 25', 'c5vc)5KE'),
      // new ProjectSlim(26, 'Project 26', 'c5vc)5KE'),
      // new ProjectSlim(27, 'Project 27', 'c5vc)5KE'),
      // new ProjectSlim(28, 'Project 28', 'c5vc)5KE'),
      // new ProjectSlim(29, 'Project 29', 'c5vc)5KE'),
      // new ProjectSlim(30, 'Project 30', 'c5vc)5KE'),
      // new ProjectSlim(31, 'Project 31', 'c5vc)5KE'),
      // new ProjectSlim(32, 'Project 32', 'c5vc)5KE'),
      // new ProjectSlim(33, 'Project 33', 'c5vc)5KE'),
      // new ProjectSlim(34, 'Project 34', 'c5vc)5KE'),
      // new ProjectSlim(35, 'Project 35', 'c5vc)5KE'),
      // new ProjectSlim(36, 'Project 36', 'c5vc)5KE'),
      // new ProjectSlim(37, 'Project 37', 'c5vc)5KE'),
      // new ProjectSlim(38, 'Project 38', 'c5vc)5KE'),
      // new ProjectSlim(39, 'Project 39', 'c5vc)5KE'),
      // new ProjectSlim(40, 'Project 40', 'c5vc)5KE'),
    ];
    const demo = [
      new DemoSlim(1, 'ashu', 'satara', 'electricals')
    ]

    return { projects, demo };
  }

  /** If projects array is empty this returns 11, highest project id + 1 otherwise. */
  genId(projects: ProjectSlim[]): number {
    return projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 11;
  }
}
