import { ProjectGridComponent } from "src/app/project-grid/project-grid.component";
import { EnterpriseActionDispatcher } from '../../projects/enterprise-grid/src/action/EnterpriseActionDispatcher';

export class ProjectActionDispatcher extends EnterpriseActionDispatcher {

    projectGrid: ProjectGridComponent
    constructor() {
        super();
    }

    onRowClick(obj: {}) {
        console.log(' on row click', obj);
    }

    selectRow(obj: {}) {
        console.log(' select row', obj);
    }

    addNewProject(obj: {}) {
        console.log(' add new form', obj);
    }

    deleteProject(obj: {}) {
        console.log('delete project', obj);
    }

    filterValue(obj: {}) {
        console.log('filter value', obj);
    }

    enableSearchToolbar(obj: {}) {
        console.log('Inside enableSearchToolbar', obj);
    }

    deleteCheckedProjects(obj: {}) {
        console.log('delete-checked-projects', obj);
    }

    archiveMultipleProjects(obj: {}) {
        console.log('archive multiple projects', obj);
    }

    markAsImportant(obj: {}) {
        console.log('mark as important', obj);
    }

    addStar(obj: {}) {
        console.log('add star', obj);
    }

    moveProject(obj: {}) {
        console.log('move project', obj);
    }

    previousRecords(obj: {}) {
        console.log('previous Records', obj);
    }

    nextRecords(obj) {
        console.log('next Records', obj);
        // return this.projectGrid.getFirstPage(obj, 12);
    }

    getDataByPage(obj) {
        console.log('get data by page', obj);
        // return this.projectGrid.getFirstPage(obj, 12);
    }

}