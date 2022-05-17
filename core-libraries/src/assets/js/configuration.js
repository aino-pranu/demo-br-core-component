
export var gridConfig =
{
    gridHeader: "Project", gridComponentTag: "app-project-grid", pageSize: 12, totalRecords: 40
}

export var featureConfig = [
    { "name": "enableActionToolbar", "enable": true },
    { "name": "enableSearchToolbar", "enable": true },
    { "name": "enableSearchPlaceholder", "enable": true },
    { "name": "enableSearchBar", "enable": true },
    { "name": "selectRow", "enable": true }
];

export var columnConfig = [
    { "name": "id", "item": "Project ID", "position": 1 },
    { "name": "name", "item": "Project Name", "position": 2 },
    { "name": "guiId", "item": "Project GUID", "position": 3 },
];

export var actionConfig =
    [
        { "name": "onRowClick", "enable": true, "token": "on-row-click", "isBulk": false },
        { "name": "addNewProject", "enable": true, "token": "add-new-project", "isBulk": false, "type": "core_action", "positionType": "null", "isIcon": true, "iconName": "Add New Project", "tooltip": "Add New Project" },
        { "name": "deleteValue", "enable": true, "token": "delete-project", "isBulk": false, "type": "entity_action", "positionType": "null", "isIcon": true, "iconName": "delete", "tooltip": "Delete" },
    ];

export var pagingConfig = [
    { "name": "previousRecords", "enable": true, "token": "previous-records", "pagingType": "paging", "isIcon": true, "iconName": "chevron_left", "tooltip": "Previous" },
    { "name": "nextRecords", "enable": true, "token": "next-records", "pagingType": "paging", "isIcon": true, "iconName": "chevron_right", "tooltip": "Next" }
];
