
export var gridConfig =
{
    gridHeader: "Demo", gridComponentTag: "app-demo-grid", pageSize: 12, totalRecords: 40
}

export var featureConfig = [
    { "name": "enableActionToolbar", "enable": true },
    { "name": "enableSearchToolbar", "enable": true },
    { "name": "enableSearchPlaceholder", "enable": true },
    { "name": "enableSearchBar", "enable": true },
    { "name": "selectRow", "enable": true }
];

export var columnConfig = [
    { "name": "id", "item": "ID", "position": 1 },
    { "name": "last", "item": " Last", "position": 2 },
    { "name": "address", "item": "Address", "position": 3 },
    { "name": "education", "item": "Education", "position": 4 },
];

export var actionConfig =
    [
        { "name": "onRowClick", "enable": true, "token": "on-row-click", "isBulk": false },
        { "name": "addNewDemo", "enable": true, "token": "add-new-demo", "isBulk": false, "type": "core_action", "positionType": "null", "isIcon": true, "iconName": "Add New Demo", "tooltip": "Add New Demo" },
        { "name": "deleteValue", "enable": true, "token": "delete-project", "isBulk": false, "type": "entity_action", "positionType": "null", "isIcon": true, "iconName": "delete", "tooltip": "Delete" },
    ];

export var pagingConfig = [
    { "name": "previousRecords", "enable": true, "token": "previous-records", "pagingType": "paging", "isIcon": true, "iconName": "chevron_left", "tooltip": "Previous" },
    { "name": "nextRecords", "enable": true, "token": "next-records", "pagingType": "paging", "isIcon": true, "iconName": "chevron_right", "tooltip": "Next" }
];
