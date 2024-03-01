"use strict";
/**
 *  Default page code.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_navigations_1 = require("@syncfusion/ej2-navigations");
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var ej2_kanban_1 = require("@syncfusion/ej2-kanban");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_gantt_1 = require("@syncfusion/ej2-gantt");
var ej2_calendars_1 = require("@syncfusion/ej2-calendars");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var ej2_schedule_1 = require("@syncfusion/ej2-schedule");
var ej2_base_2 = require("@syncfusion/ej2-base");
ej2_gantt_1.Gantt.Inject(ej2_gantt_1.Edit, ej2_gantt_1.Selection, ej2_gantt_1.Toolbar, ej2_gantt_1.DayMarkers);
ej2_schedule_1.Schedule.Inject(ej2_schedule_1.Day, ej2_schedule_1.Week, ej2_schedule_1.WorkWeek, ej2_schedule_1.Month, ej2_schedule_1.Year, ej2_schedule_1.Agenda, ej2_schedule_1.TimelineViews, ej2_schedule_1.TimelineMonth, ej2_schedule_1.TimelineYear, ej2_schedule_1.DragAndDrop, ej2_schedule_1.Resize, ej2_schedule_1.ExcelExport, ej2_schedule_1.ICalendarExport, ej2_schedule_1.ICalendarImport, ej2_schedule_1.Print);
ej2_grids_1.Grid.Inject(ej2_grids_1.Page, ej2_grids_1.Edit, ej2_grids_1.Toolbar, ej2_grids_1.Group);
window.sprintData1 =
    [
        {
            Id: 1,
            Subject: 'Implement User Authentication',
            Status: 'InProgress',
            StartTime: '2021-01-14T06:30:00.000Z',
            EndTime: '2021-01-22T08:30:00.000Z',
            Priority: 'High',
            resources: "Martin Tamer",
            Tags: 'Bug, Release Bug',
            Progress: 40,
        },
        {
            Id: 2,
            Subject: 'Design Database Schema',
            Status: 'InProgress',
            StartTime: '2021-01-16T06:30:00.000Z',
            EndTime: '2021-01-25T08:30:00.000Z',
            resources: 'Rose Fuller',
            Priority: 'Low',
            Tags: 'Bug, Release Bug',
            Progress: 40,
            Predecessor: 1,
        },
        {
            Id: 3,
            Subject: 'Homepage UI Development',
            Status: 'Open',
            StartTime: '2021-01-07T06:30:00.000Z',
            EndTime: '2021-01-15T08:30:00.000Z',
            resources: 'Margaret Buchanan',
            Priority: 'Normal',
            Tags: 'Bug, Release Bug',
            Progress: 0,
            Predecessor: 1,
        },
        {
            Id: 4,
            Subject: 'Homepage Redesign',
            Status: 'Open',
            StartTime: '2021-01-22T06:30:00.000Z',
            EndTime: '2021-01-26T08:30:00.000Z',
            resources: 'Martin Tamer',
            Priority: 'Critical',
            Tags: 'Bug, Release Bug',
            Progress: 0,
        },
        {
            Id: 5,
            Subject: 'API Integration with External Services',
            Status: 'Testing',
            StartTime: '2021-01-26T06:30:00.000Z',
            EndTime: '2021-02-05T08:30:00.000Z',
            resources: 'Rose Fuller',
            Priority: 'Normal',
            Tags: 'Bug, Breaking Issue',
            Progress: 90,
        },
        {
            Id: 6,
            Subject: 'Bug Fixing and Quality Assurance',
            Status: 'Close',
            StartTime: '2021-02-05T06:30:00.000Z',
            EndTime: '2021-02-15T08:30:00.000Z',
            resources: 'Rose Fuller',
            Priority: 'Low',
            Tags: 'Bug, Internal',
            Progress: 100,
        },
        {
            Id: 7,
            Subject: 'User Profile Management',
            Status: 'Testing',
            StartTime: '2021-01-14T06:30:00.000Z',
            EndTime: '2021-01-22T08:30:00.000Z',
            resources: 'Margaret Buchanan',
            Priority: 'Critical',
            Tags: 'Bug, Release Bug',
            Progress: 90,
        },
        {
            Id: 8,
            Subject: 'Mobile App Compatibility Testing',
            Status: 'Open',
            StartTime: '2021-02-14T06:30:00.000Z',
            EndTime: '2021-02-22T08:30:00.000Z',
            resources: 'Fuller King',
            Priority: 'High',
            Tags: 'Bug, Internal Request',
            Progress: 0,
        },
        {
            Id: 9,
            Subject: 'Performance Optimization',
            Status: 'InProgress',
            StartTime: '2021-01-14T06:30:00.000Z',
            EndTime: '2021-01-22T08:30:00.000Z',
            resources: 'Davolio Fuller',
            Priority: 'Low',
            Tags: 'Bug, Breaking Issue',
            Progress: 67,
        },
        {
            Id: 10,
            Subject: 'Payment Gateway Integration',
            Status: 'Open',
            StartTime: '2021-01-26T06:30:00.000Z',
            EndTime: '2021-02-10T08:30:00.000Z',
            resources: 'Davolio Fuller',
            Priority: 'Critical',
            Tags: 'Bug, Customer Task',
            Progress: 0,
            Predecessor: 5,
        },
        {
            Id: 11,
            Subject: 'Cross-Browser Compatibility Testing',
            Status: 'InProgress',
            StartTime: '2021-01-14T06:30:00.000Z',
            EndTime: '2021-01-22T08:30:00.000Z',
            resources: 'Martin Tamer',
            Priority: 'High',
            Tags: 'Bug, Breaking Issue',
            Progress: 40,
        },
        {
            Id: 12,
            Subject: 'Enhance User Notifications',
            Status: 'Testing',
            StartTime: '2021-02-22T06:30:00.000Z',
            EndTime: '2021-03-10T08:30:00.000Z',
            resources: 'Martin Tamer',
            Priority: 'Normal',
            Tags: 'Bug, Breaking Issue',
            Progress: 90,
        },
        {
            Id: 13,
            Subject: 'Implement Single Sign-On (SSO)',
            Status: 'Open',
            StartTime: '2021-03-05T06:30:00.000Z',
            EndTime: '2021-03-10T08:30:00.000Z',
            resources: 'Fuller King',
            Priority: 'Low',
            Tags: 'Bug, Release Bug',
            Progress: 0,
        },
        {
            Id: 14,
            Subject: 'Implement Chat Feature',
            Status: 'InProgress',
            StartTime: '2021-03-14T06:30:00.000Z',
            EndTime: '2021-03-22T08:30:00.000Z',
            resources: 'Fuller King',
            Priority: 'High',
            Tags: 'Bug, Internal',
            Progress: 55,
            Predecessor: 11,
        },
        {
            Id: 15,
            Subject: 'Data Migration to New Server',
            Status: 'InProgress',
            StartTime: '2021-03-14T06:30:00.000Z',
            EndTime: '2021-03-22T08:30:00.000Z',
            resources: 'Margaret Buchanan',
            Priority: 'Critical',
            Tags: 'Bug, Customer',
            Progress: 56,
        },
        {
            Id: 16,
            Subject: 'User Feedback Analysis',
            Status: 'Close',
            StartTime: '2021-03-17T06:30:00.000Z',
            EndTime: '2021-03-22T08:30:00.000Z',
            resources: 'Margaret Buchanan',
            Priority: 'Critical',
            Tags: 'Bug, Customer',
            Progress: 100,
            Predecessor: 15,
        },
        {
            Id: 17,
            Subject: 'Server Infrastructure Upgrades',
            Status: 'Close',
            StartTime: '2021-03-17T06:30:00.000Z',
            EndTime: '2021-03-22T08:30:00.000Z',
            resources: 'Davolio Fuller',
            Priority: 'Normal',
            Tags: 'Bug, Customer',
            Progress: 100,
        },
        {
            Id: 18,
            Subject: 'Enhance Dashboard UI',
            Status: 'Open',
            StartTime: '2021-03-20T06:30:00.000Z',
            EndTime: '2021-03-22T08:30:00.000Z',
            resources: 'Davolio Fuller',
            Priority: 'High',
            Tags: 'Bug, Customer',
            Progress: 80,
            Predecessor: 17,
        },
        {
            Id: 19,
            Subject: 'Documentation and User Guides',
            Status: 'Open',
            StartTime: '2021-03-22T06:30:00.000Z',
            EndTime: '2021-03-25T08:30:00.000Z',
            resources: 'Davolio Fuller',
            Priority: 'High',
            Tags: 'Bug, Customer',
            Progress: 56,
        },
        {
            Id: 20,
            Subject: 'Localization Support for Multiple Languages',
            Status: 'Close',
            StartTime: '2021-03-22T06:30:00.000Z',
            EndTime: '2021-03-25T08:30:00.000Z',
            resources: 'Rose Fuller',
            Priority: 'High',
            Tags: 'Bug, Customer',
            Progress: 100,
        },
        {
            Id: 21,
            Subject: 'User Profile Customization Options',
            Status: 'Close',
            StartTime: '2021-04-05T06:30:00.000Z',
            EndTime: '2021-04-25T08:30:00.000Z',
            resources: 'Davolio Fuller',
            Priority: 'High',
            Tags: 'Bug, Customer',
            Progress: 100,
        },
        {
            Id: 22,
            Subject: 'Third-Party API Integration',
            Status: 'Close',
            StartTime: '2021-04-05T06:30:00.000Z',
            EndTime: '2021-04-23T08:30:00.000Z',
            resources: 'Martin Tamer',
            Priority: 'Normal',
            Tags: 'Bug, Customer',
            Progress: 100,
        },
        {
            Id: 23,
            Subject: 'User Onboarding and Tutorial Creation',
            Status: 'Testing',
            StartTime: '2021-04-10T06:30:00.000Z',
            EndTime: '2021-04-25T08:30:00.000Z',
            resources: 'Rose Fuller',
            Priority: 'Normal',
            Tags: 'Bug',
            Progress: 56,
            Predecessor: 22,
        },
        {
            Id: 24,
            Subject: 'Implement Two-Factor Authentication (2FA)',
            Status: 'Testing',
            StartTime: '2021-04-15T06:30:00.000Z',
            EndTime: '2021-04-20T08:30:00.000Z',
            resources: 'Rose Fuller',
            Priority: 'Normal',
            Tags: 'Bug',
            Progress: 56,
        },
        {
            Id: 25,
            Subject: 'Performance Monitoring and Load Testing',
            Status: 'Testing',
            StartTime: '2021-04-05T06:30:00.000Z',
            EndTime: '2021-04-18T08:30:00.000Z',
            resources: 'Martin Tamer',
            Priority: 'Normal',
            Tags: 'Bug',
            Progress: 90,
            Predecessor: 19,
        },
    ];
window.sprintData2 = [
    {
        Id: 1,
        Subject: 'Database Backup and Recovery Strategy',
        Status: 'Open',
        StartTime: '2021-07-01T06:30:00.000Z',
        EndTime: '2021-07-10T08:30:00.000Z',
        Priority: 'Low',
        Progress: 10,
        resources: 'Martin Tamer',
        Tags: 'Validation',
    },
    {
        Id: 2,
        Subject: 'User Profile Avatar Customization',
        Status: 'InProgress',
        StartTime: '2021-07-11T06:30:00.000Z',
        EndTime: '2021-07-20T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 20,
        resources: 'Rose Fuller',
        Tags: 'CR',
        Predecessor: 1,
    },
    {
        Id: 3,
        Subject: 'Integrate Machine Learning Algorithms',
        Status: 'Testing',
        StartTime: '2021-07-21T06:30:00.000Z',
        EndTime: '2021-07-30T08:30:00.000Z',
        Priority: 'High',
        Progress: 30,
        resources: 'Margaret Buchanan',
        Tags: 'CR',
    },
    {
        Id: 4,
        Subject: 'Implement User Feedback Surveys',
        Status: 'Close',
        StartTime: '2021-08-01T06:30:00.000Z',
        EndTime: '2021-08-10T08:30:00.000Z',
        Priority: 'Critical',
        Progress: 100,
        resources: 'Martin Tamer',
        Tags: 'Bug',
    },
    {
        Id: 5,
        Subject: 'Dashboard Widget Customization',
        Status: 'Open',
        StartTime: '2021-08-11T06:30:00.000Z',
        EndTime: '2021-08-20T08:30:00.000Z',
        Priority: 'Low',
        Progress: 50,
        resources: 'Margaret Buchanan',
        Tags: 'Validation',
        Predecessor: 1,
    },
    {
        Id: 6,
        Subject: 'User Engagement Analytics',
        Status: 'InProgress',
        StartTime: '2021-08-21T06:30:00.000Z',
        EndTime: '2021-08-30T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 60,
        resources: 'Rose Fuller',
        Tags: 'Bug',
    },
    {
        Id: 7,
        Subject: 'Multi-Platform Compatibility Testing',
        Status: 'Testing',
        StartTime: '2021-09-01T06:30:00.000Z',
        EndTime: '2021-09-10T08:30:00.000Z',
        Priority: 'High',
        Progress: 70,
        resources: 'Martin Tamer',
        Tags: 'Bug',
        Predecessor: 4,
    },
    {
        Id: 8,
        Subject: 'User Profile Data Export Feature',
        Status: 'Close',
        StartTime: '2021-09-11T06:30:00.000Z',
        EndTime: '2021-09-20T08:30:00.000Z',
        Priority: 'Critical',
        Progress: 100,
        resources: 'Davolio Fuller',
        Tags: 'Bug',
    },
    {
        Id: 9,
        Subject: 'Performance Benchmarking and Optimization',
        Status: 'Open',
        StartTime: '2021-10-01T06:30:00.000Z',
        EndTime: '2021-10-10T08:30:00.000Z',
        Priority: 'Low',
        Progress: 90,
        resources: 'Fuller King',
        Tags: 'Testing',
    },
    {
        Id: 10,
        Subject: 'Automated Error Logging and Reporting',
        Status: 'Close',
        StartTime: '2021-10-11T06:30:00.000Z',
        EndTime: '2021-10-20T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 100,
        resources: 'Fuller King',
        Tags: 'Bug',
        Predecessor: 5,
    },
    {
        Id: 11,
        Subject: 'User Activity Heatmaps',
        Status: 'Testing',
        StartTime: '2021-10-21T06:30:00.000Z',
        EndTime: '2021-10-30T08:30:00.000Z',
        Priority: 'High',
        Progress: 20,
        resources: 'Fuller King',
        Tags: 'Bug',
    },
    {
        Id: 12,
        Subject: 'Implement Dark Mode Theme',
        Status: 'Open',
        StartTime: '2021-11-01T06:30:00.000Z',
        EndTime: '2021-11-10T08:30:00.000Z',
        Priority: 'Low',
        Progress: 30,
        resources: 'Davolio Fuller',
        Tags: 'Internal',
    },
    {
        Id: 13,
        Subject: 'Database Replication and Scaling',
        Status: 'InProgress',
        StartTime: '2021-11-11T06:30:00.000Z',
        EndTime: '2021-11-20T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 40,
        resources: 'Rose Fuller',
        Tags: 'Bug',
        Predecessor: 10,
    },
    {
        Id: 14,
        Subject: 'Enhanced Search Functionality',
        Status: 'Close',
        StartTime: '2021-11-21T06:30:00.000Z',
        EndTime: '2021-11-30T08:30:00.000Z',
        Priority: 'Critical',
        Progress: 100,
        resources: 'Martin Tamer',
        Tags: 'Feature',
        Predecessor: 10,
    },
    {
        Id: 15,
        Subject: 'User Password Policy Management',
        Status: 'Open',
        StartTime: '2021-12-01T06:30:00.000Z',
        EndTime: '2021-12-10T08:30:00.000Z',
        Priority: 'Low',
        Progress: 60,
        resources: 'Fuller King',
        Tags: 'Feature',
        Predecessor: 11,
    },
    {
        Id: 16,
        Subject: 'Data Anonymization for Privacy',
        Status: 'InProgress',
        StartTime: '2021-12-11T06:30:00.000Z',
        EndTime: '2021-12-20T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 70,
        resources: 'Fuller King',
        Tags: 'Feature',
        Predecessor: 15,
    },
    {
        Id: 17,
        Subject: 'Interactive User Tutorials',
        Status: 'Testing',
        StartTime: '2022-01-01T06:30:00.000Z',
        EndTime: '2022-01-10T08:30:00.000Z',
        Priority: 'High',
        Progress: 80,
        resources: 'Davolio Fuller',
        Tags: 'Bug, Internal',
        Predecessor: 15,
    },
    {
        Id: 18,
        Subject: 'Real-time Collaboration Tools',
        Status: 'Open',
        StartTime: '2022-01-11T06:30:00.000Z',
        EndTime: '2022-01-20T08:30:00.000Z',
        Priority: 'Low',
        Progress: 90,
        resources: 'Rose Fuller',
        Tags: 'Customer',
    },
    {
        Id: 19,
        Subject: 'User Data Archiving and Cleanup',
        Status: 'Close',
        StartTime: '2022-01-21T06:30:00.000Z',
        EndTime: '2022-01-30T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 100,
        resources: 'Fuller King',
        Tags: 'Customer',
    },
    {
        Id: 20,
        Subject: 'Implement File Upload and Sharing',
        Status: 'Close',
        StartTime: '2022-02-01T06:30:00.000Z',
        EndTime: '2022-02-10T08:30:00.000Z',
        Priority: 'Critical',
        Progress: 100,
        resources: 'Martin Tamer',
        Tags: 'Bug, Customer',
        Predecessor: 19,
    },
];
window.sprintData3 = [
    {
        Id: 1,
        Subject: 'User Account Deletion Feature',
        Status: 'Open',
        StartTime: '2021-01-01T06:30:00.000Z',
        EndTime: '2021-01-10T08:30:00.000Z',
        Priority: 'Low',
        Progress: 10,
        resources: 'Martin Tamer',
        Tags: 'Bug',
    },
    {
        Id: 2,
        Subject: 'Task Scheduling and Reminders',
        Status: 'InProgress',
        StartTime: '2021-02-05T06:30:00.000Z',
        EndTime: '2021-02-15T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 20,
        resources: 'Rose Fuller',
        Tags: 'Bug',
    },
    {
        Id: 3,
        Subject: 'Advanced Data Analytics Dashboard',
        Status: 'Testing',
        StartTime: '2021-03-10T06:30:00.000Z',
        EndTime: '2021-03-20T08:30:00.000Z',
        Priority: 'High',
        Progress: 30,
        resources: 'Rose Fuller',
        Tags: 'Bug',
        Predecessor: 1,
    },
    {
        Id: 4,
        Subject: 'User Access Control Management',
        Status: 'Close',
        StartTime: '2021-04-15T06:30:00.000Z',
        EndTime: '2021-04-25T08:30:00.000Z',
        Priority: 'Critical',
        Progress: 100,
        resources: 'Margaret Buchanan',
        Tags: 'Company',
    },
    {
        Id: 5,
        Subject: 'Data Import and Export Tools',
        Status: 'Open',
        StartTime: '2021-05-20T06:30:00.000Z',
        EndTime: '2021-05-30T08:30:00.000Z',
        Priority: 'Low',
        Progress: 50,
        resources: 'Margaret Buchanan',
        Tags: 'Customer',
        Predecessor: 1,
    },
    {
        Id: 6,
        Subject: 'Notification System Overhaul',
        Status: 'Open',
        StartTime: '2021-06-10T06:30:00.000Z',
        EndTime: '2021-06-20T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 60,
        resources: 'Davolio Fuller',
        Tags: 'Internal',
    },
    {
        Id: 7,
        Subject: 'User Role-Based Permissions',
        Status: 'Close',
        StartTime: '2021-07-05T06:30:00.000Z',
        EndTime: '2021-07-15T08:30:00.000Z',
        Priority: 'High',
        Progress: 100,
        resources: 'Davolio Fuller',
        Tags: 'Bug',
        Predecessor: 5,
    },
    {
        Id: 8,
        Subject: 'Server Performance Optimization',
        Status: 'Testing',
        StartTime: '2021-01-25T06:30:00.000Z',
        EndTime: '2021-02-05T08:30:00.000Z',
        Priority: 'Low',
        Progress: 80,
        resources: 'Davolio Fuller',
        Tags: 'Internal',
    },
    {
        Id: 9,
        Subject: 'Integration with Cloud Services',
        Status: 'Testing',
        StartTime: '2021-02-10T06:30:00.000Z',
        EndTime: '2021-02-20T08:30:00.000Z',
        Priority: 'Normal',
        Progress: 90,
        resources: 'Rose Fuller',
        Tags: 'Customer',
    },
    {
        Id: 10,
        Subject: 'Real-time Chat and Messaging',
        Status: 'Close',
        StartTime: '2021-03-01T06:30:00.000Z',
        EndTime: '2021-03-10T08:30:00.000Z',
        Priority: 'Critical',
        Progress: 100,
        resources: 'Rose Fuller',
        Tags: 'Bug, Customer',
        Predecessor: 8,
    },
];
window.commonData = window.sprintData1;
var storeScheduleEditID;
var tabObj;
var gridObj;
var kanbanObj;
var gantt;
var scheduleObj;
var isStatusChange;
var storeStatusValue;
var datasourceDropDownwidth;
var timeRageWidth;
var resourceDropInstance;
var dateRangeInstance;
var topDropDownInstance;
var resourceSelectValue;
var fields = { text: 'Game', value: 'Id' };
var editingResources = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
];
var priorityDataSource = [
    { name: 'Low', value: 'Low' },
    { name: 'Critical', value: 'Critical' },
    { name: 'Normal', value: 'Normal' },
    { name: 'High', value: 'High' },
];
function updateCommonDataAndRefreshComponents(commonData) {
    window.commonData = commonData;
    if (kanbanObj) {
        kanbanObj.dataSource = commonData;
    }
    if (scheduleObj) {
        scheduleObj.eventSettings.dataSource = commonData;
        scheduleObj.resources[1].dataSource = commonData;
    }
    if (gantt) {
        gantt.dataSource = commonData;
    }
    if (gridObj) {
        gridObj.dataSource = commonData;
    }
    setTimeout(function () {
        if (kanbanObj) {
            kanbanObj.refresh();
            // setTimeout(() => {
            //   adjustKanbanHeight();
            // }, 0);
        }
        if (scheduleObj) {
            scheduleObj.refresh();
            // setTimeout(() => {
            //   adjustSchedulerHeight();
            // }, 0);
        }
        if (gantt) {
            gantt.refresh();
            // setTimeout(() => {
            //   adjustGanttHeight();
            // }, 0);
        }
        if (gridObj) {
            gridObj.refresh();
            // setTimeout(() => {
            //   adjustGridHeight();
            // }, 0);
        }
    }, 0);
    setTimeout(function () {
        updateCardValue(commonData);
    }, 300);
}
var filterAndUpdateData = function (projectData) {
    var filteredValue = projectData;
    if (resourceSelectValue) {
        filteredValue = filteredValue.filter(function (obj) {
            return resourceSelectValue == obj.resources;
        });
    }
    if (dateRangeInstance.value !== null) {
        var givenStartDate_1 = dateRangeInstance.startDate;
        var givenEndDate_1 = dateRangeInstance.endDate;
        filteredValue = filteredValue.filter(function (obj) {
            var startDate = new Date(obj.StartTime);
            var endDate = new Date(obj.EndTime);
            var givenStartDateObj = new Date(givenStartDate_1);
            var givenEndDateObj = new Date(givenEndDate_1);
            return startDate >= givenStartDateObj && endDate <= givenEndDateObj;
        });
    }
    updateCommonDataAndRefreshComponents(filteredValue);
};
function renderDataSourceDropDown() {
    topDropDownInstance = new ej2_dropdowns_1.DropDownList({
        dataSource: [
            { Id: 'Project1', Game: 'Project 1' },
            { Id: 'Project2', Game: 'Project 2' },
            { Id: 'Project3', Game: 'Project 3' },
        ],
        fields: fields,
        change: function (args) {
            var selectedProject = args.itemData[fields.value].toString();
            switch (selectedProject) {
                case 'Project1':
                    filterAndUpdateData(window.sprintData1);
                    scheduleObj.selectedDate = new Date(window.sprintData1[0].StartTime);
                    break;
                case 'Project2':
                    filterAndUpdateData(window.sprintData2);
                    scheduleObj.selectedDate = new Date(window.sprintData2[0].StartTime);
                    break;
                case 'Project3':
                    filterAndUpdateData(window.sprintData3);
                    scheduleObj.selectedDate = new Date(window.sprintData3[0].StartTime);
                    break;
            }
        },
        placeholder: "Select a Project",
        value: 'Project1',
        width: "200px",
        popupHeight: "220px"
    });
    topDropDownInstance.appendTo("#datasourceDropDown");
}
function idExistsInArray(id, array) {
    // Add the debugger statement here
    return array.some(function (obj) { return obj.Id === id; });
}
function renderButton() {
    var _a, _b;
    (_a = document.getElementsByClassName('button1')[0]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        debugger;
        var projectValue = topDropDownInstance.value;
        var projectData = window["sprintData".concat(projectValue.charAt(projectValue.length - 1))];
        if (!projectData || projectData.length === 0) {
            // Handle the case when projectData is not defined or is an empty array
            return;
        }
        var data = __assign({}, projectData[0]);
        var newId = projectData.length;
        do {
            newId++;
        } while (idExistsInArray(newId, projectData));
        data.Id = newId;
        var indexValue;
        var centeredDiv = document.querySelector('.centered-div1');
        if (centeredDiv) {
            var elements = centeredDiv.querySelectorAll('div');
            var parentDiv_1 = [];
            elements.forEach(function (element) {
                if (element.className.includes("parent")) {
                    parentDiv_1.push(element);
                }
            });
            elements = parentDiv_1;
            elements.forEach(function (element, index) {
                if (element.classList.contains('show1-background')) {
                    indexValue = index;
                }
            });
        }
        switch (indexValue) {
            case 0:
                kanbanObj.openDialog("Add", data);
                //  kanbanObj.addCard(data);
                break;
            case 1:
                scheduleObj.openEditor(data, "Add");
                var resource = __assign({}, data.resources[0]);
                // scheduleObj.addEvent(data)
                // setTimeout(() => {
                //   debugger
                //   scheduleObj.eventsData[scheduleObj.eventsData.length-1].resources[0] = resource
                //   const projectValue = topDropDownInstance.value as string;
                //   const projectData = window[`sprintData${projectValue.charAt(projectValue.length - 1)}`];
                //   projectData[projectData.length-1].resources[0] = resource
                // })
                break;
            case 2:
                gantt.openAddDialog();
                break;
            case 3:
                gridObj.editSettings.mode = "Dialog";
                gridObj.editModule.addRecord();
                //  gridObj.addRecord(data);
                break;
        }
    });
    (_b = document.getElementsByClassName('custom-div1')[0]) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var projectValue = topDropDownInstance.value;
        var projectData = window["sprintData".concat(projectValue.charAt(projectValue.length - 1))];
        if (!projectData || projectData.length === 0) {
            return;
        }
        var data = __assign({}, projectData[0]);
        var newId = projectData.length;
        do {
            newId++;
        } while (idExistsInArray(newId, projectData));
        data.Id = newId;
        var indexValue;
        var centeredDiv = document.querySelector('.mobile-nav-bar1');
        if (centeredDiv) {
            var elements = centeredDiv.querySelectorAll('div');
            var parentDiv_2 = [];
            elements.forEach(function (element) {
                if (element.className.includes("parent")) {
                    parentDiv_2.push(element);
                }
            });
            elements = parentDiv_2;
            elements.forEach(function (element, index) {
                if (element.classList.contains('show1-background')) {
                    indexValue = index;
                }
            });
        }
        switch (indexValue) {
            case 0:
                kanbanObj.openDialog("Add", data);
                //  kanbanObj.addCard(data);
                break;
            case 1:
                scheduleObj.openEditor(data, "Add");
                var resource = __assign({}, data.resources[0]);
                // scheduleObj.addEvent(data)
                // setTimeout(() => {
                //   debugger
                //   scheduleObj.eventsData[scheduleObj.eventsData.length-1].resources[0] = resource
                //   const projectValue = topDropDownInstance.value as string;
                //   const projectData = window[`sprintData${projectValue.charAt(projectValue.length - 1)}`];
                //   projectData[projectData.length-1].resources[0] = resource
                // })
                break;
            case 2:
                gantt.openAddDialog();
                break;
            case 3:
                gridObj.editSettings.mode = "Dialog";
                gridObj.editModule.addRecord();
                //  gridObj.addRecord(data);
                break;
        }
    });
}
function resourceFilterImage(value) {
    var projectValue = topDropDownInstance.value;
    var dateRangeValue = dateRangeInstance.value;
    var currentData = window["sprintData".concat(projectValue.slice(-1))];
    if (value) {
        var filteredData = currentData.filter(function (item) {
            var resourceMatch = typeof value === 'string' && value &&
                item.resources === value;
            var dateMatch = !dateRangeValue ||
                (new Date(item.StartTime) >= dateRangeInstance.startDate &&
                    new Date(item.EndTime) <= dateRangeInstance.endDate);
            return resourceMatch && dateMatch;
        });
        updateCommonDataAndRefreshComponents(filteredData);
    }
    else {
        updateCommonDataAndRefreshComponents(currentData);
    }
}
function timerangecompo() {
    dateRangeInstance = new ej2_calendars_1.DateRangePicker({
        change: function (args) {
            var projectValue = topDropDownInstance.value;
            var resourceValue = resourceSelectValue;
            var currentData = window["sprintData".concat(projectValue.slice(-1))];
            var isDateRangeValid = args.text !== '';
            var matchedItems = currentData.filter(function (item) {
                var itemStartDate = new Date(item.StartTime);
                var itemEndDate = new Date(item.EndTime);
                var dateMatch = !isDateRangeValid ||
                    (itemStartDate >= args.startDate && itemEndDate <= args.endDate);
                return dateMatch;
            });
            if (resourceValue) {
                var resourceMatchedItems = resourceValue
                    ? matchedItems.filter(function (item) {
                        return item.resources === resourceValue;
                    })
                    : matchedItems;
                updateCommonDataAndRefreshComponents(resourceMatchedItems);
            }
            else if (!resourceValue || resourceValue.length == 0) {
                updateCommonDataAndRefreshComponents(matchedItems);
            }
        },
        width: "200px",
        startDate: new Date(2019, 0, 1),
        endDate: new Date(2023, 0, 1),
    });
    dateRangeInstance.appendTo("#timerangecompo1");
}
function renderVisalComponents() {
    tabObj = new ej2_navigations_1.Tab({
        height: "100%",
        heightAdjustMode: 'None',
        headerPlacement: 'Left',
        created: function () {
            var toolbarItems = document.getElementsByClassName("e-toolbar-items")[0];
            var parentDiv = document.createElement("div");
            parentDiv.classList.add("tap");
            while (toolbarItems.firstChild) {
                parentDiv.appendChild(toolbarItems.firstChild);
            }
            while (toolbarItems.firstChild) {
                toolbarItems.removeChild(toolbarItems.firstChild);
            }
            toolbarItems.appendChild(parentDiv);
            if (toolbarItems) {
                toolbarItems.style.display = 'flex';
                toolbarItems.style.justifyContent = 'space-between';
                toolbarItems.style.flexDirection = 'column';
                toolbarItems.style.alignItems = 'center';
            }
            var newDiv = document.createElement("div");
            newDiv.classList.add("userImage");
            var userImageParentDiv = document.createElement("div");
            userImageParentDiv.classList.add("userImageParentDiv");
            userImageParentDiv.appendChild(newDiv);
            if (userImageParentDiv) {
                userImageParentDiv.style.display = 'flex';
                userImageParentDiv.style.alignItems = 'center';
                userImageParentDiv.style.marginBottom = '5px';
            }
            toolbarItems.appendChild(userImageParentDiv);
            var newDiv2 = document.createElement("div");
            newDiv2.classList.add("topImage");
            var topImageParentDiv = document.createElement("div");
            topImageParentDiv.classList.add("topImageParentDIv");
            topImageParentDiv.style.marginTop = '8px';
            topImageParentDiv.appendChild(newDiv2);
            toolbarItems.insertBefore(topImageParentDiv, toolbarItems.firstChild);
            var tabHeaders = document.getElementsByClassName('e-tab-header');
            if (tabHeaders.length > 0) {
                tabHeaders[0].style.background = '#0D9488';
            }
            tabObj.element.classList.add('e-accent');
        },
        selected: function (args) {
            switch (args.selectedIndex) {
                case 0:
                    setTimeout(function () {
                        kanbanObj.refresh();
                        setTimeout(function () {
                            adjustKanbanHeight();
                        }, 0);
                    }, 100);
                    break;
                case 1:
                    setTimeout(function () {
                        scheduleObj.refresh();
                        setTimeout(function () {
                            adjustSchedulerHeight();
                        }, 0);
                    }, 100);
                    break;
                case 2:
                    setTimeout(function () {
                        gantt.refresh();
                        setTimeout(function () {
                            adjustGanttHeight();
                        }, 0);
                    }, 300);
                    break;
                case 3:
                    setTimeout(function () {
                        gridObj.refresh();
                        setTimeout(function () {
                            adjustGridHeight();
                        }, 0);
                    }, 100);
                    break;
            }
        },
        items: [
            {
                header: { 'iconCss': 'e-taskboard' },
                content: '#Kanban'
            },
            {
                header: { 'iconCss': 'e-event-scheduler' },
                content: '#Scheduler'
            },
            {
                header: { 'iconCss': 'e-task-management' },
                content: '#Gantt'
            },
            {
                header: { 'iconCss': 'e-grid-management' },
                content: '#Grid'
            }
        ]
    });
    tabObj.appendTo('#paymentGraph');
}
// grid
function resourceValueAccessor(field, data) {
    if (data && data.resources && data.resources.length > 0) {
        var resourceName = data.resources;
        return resourceName;
    }
    return '';
}
function enddateValueAccessor(field, data) {
    if (data && data.EndTime) {
        var originalDateString = data.EndTime;
        var originalDate = new Date(originalDateString);
        var day = originalDate.getUTCDate();
        var month = originalDate.getUTCMonth() + 1;
        var year = originalDate.getUTCFullYear();
        var formattedDay = day < 10 ? '0' + day : day;
        var formattedMonth = month < 10 ? '0' + month : month;
        var formattedDateString = "".concat(formattedDay, ".").concat(formattedMonth, ".").concat(year);
        return formattedDateString;
    }
    return '';
}
function startdateValueAccessor(field, data) {
    if (data && data.StartTime) {
        var originalDateString = data.StartTime;
        var originalDate = new Date(originalDateString);
        var day = originalDate.getUTCDate();
        var month = originalDate.getUTCMonth() + 1;
        var year = originalDate.getUTCFullYear();
        var formattedDay = day < 10 ? '0' + day : day;
        var formattedMonth = month < 10 ? '0' + month : month;
        var formattedDateString = "".concat(formattedDay, ".").concat(formattedMonth, ".").concat(year);
        return formattedDateString;
    }
    return '';
}
function renderGrid() {
    var elem;
    var elem3;
    var h4Elem;
    var dropdownlistObj;
    var dropdownlistObj3;
    var progressValue;
    var status;
    var resource;
    var resourceObj;
    var customFn = function (args) {
        var value = parseInt(args['value']);
        var gridStatusElement = document.getElementById('component-render-gridStatus');
        if (gridStatusElement.ej2_instances[0]) {
            if (gridStatusElement.ej2_instances[0].value == 'Close' && value < 100) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    gridObj = new ej2_grids_1.Grid({
        dataSource: window.commonData,
        allowGrouping: true,
        height: "100%",
        groupSettings: { showDropArea: false, captionTemplate: '#captiontemplate', columns: ['resources'] },
        columns: [
            { field: 'Id', allowEditing: true },
            { field: 'Subject', width: '350px' },
            { field: 'StartTime', editType: 'datetimepickeredit', valueAccessor: startdateValueAccessor },
            { field: 'EndTime', editType: 'datetimepickeredit', valueAccessor: enddateValueAccessor },
            {
                field: 'Progress', editType: 'numericedit', edit: {
                    params: {
                        min: 0,
                        max: 100
                    }
                }, validationRules: { required: true, minLength: [customFn, 'Progress Cant be less than 100 if the status is in close'] }
            },
            {
                field: 'Status',
                edit: {
                    create: function () {
                        elem = document.createElement('input');
                        return elem;
                    },
                    read: function () {
                        return dropdownlistObj.value;
                    },
                    destroy: function () {
                        dropdownlistObj.destroy();
                    },
                    write: function (args) {
                        dropdownlistObj = new ej2_dropdowns_1.DropDownList({
                            dataSource: [
                                { Status: 'Open' },
                                { Status: 'Testing' },
                                { Status: 'InProgress' },
                                { Status: 'Close' },
                            ],
                            fields: { value: 'Status' },
                            placeholder: "Status",
                            value: args.rowData[args.column.field],
                            floatLabelType: 'Auto',
                        });
                        dropdownlistObj.appendTo(elem);
                    },
                },
            },
            {
                field: 'Priority',
                edit: {
                    create: function () {
                        elem3 = document.createElement('input');
                        return elem3;
                    },
                    read: function () {
                        return dropdownlistObj3.value;
                    },
                    destroy: function () {
                        dropdownlistObj3.destroy();
                    },
                    write: function (args) {
                        dropdownlistObj3 = new ej2_dropdowns_1.DropDownList({
                            dataSource: [
                                { Priority: 'Low' },
                                { Priority: 'Normal' },
                                { Priority: 'Critical' },
                                { Priority: 'High' },
                            ],
                            fields: { value: 'Priority' },
                            placeholder: "Priority",
                            value: args.rowData[args.column.field],
                            floatLabelType: 'Auto',
                        });
                        dropdownlistObj3.appendTo(elem3);
                    },
                },
            },
            {
                field: 'resources', headerText: 'Resources', validationRules: { required: true },
                valueAccessor: resourceValueAccessor, template: '#columnTemplateGrid', enableGroupByFormat: true,
                edit: {
                    create: function () {
                        elem1 = document.createElement('input');
                        return elem1;
                    },
                    read: function () {
                        var selectedValue = dropdownlistObj1.value;
                        var matchingResource = editingResources.find(function (resource) { return resource.resourceId === selectedValue; });
                        if (matchingResource) {
                            return matchingResource.resourceName; // Return the matching object as an array
                        }
                        return null; // Return null if no matching object is found
                    },
                    destroy: function () {
                        dropdownlistObj1.destroy();
                    },
                    write: function (args) {
                        var valueToSet = args.rowData && args.rowData[args.column.field] ? args.rowData[args.column.field] : null;
                        editingResources.forEach(function (obj) {
                            if (obj.resourceName === valueToSet) {
                                valueToSet = obj.resourceId;
                                return;
                            }
                        });
                        dropdownlistObj1 = new ej2_dropdowns_1.DropDownList({
                            dataSource: editingResources,
                            fields: { text: 'resourceName', value: 'resourceId' },
                            value: valueToSet,
                            placeholder: "Resource",
                            floatLabelType: 'Auto',
                        });
                        dropdownlistObj1.appendTo(elem1);
                    },
                }
            }
        ],
        actionBegin: function (args) {
            if (args.requestType === 'beginEdit') {
                if (args.rowData.resources) {
                    resource = args.rowData.resources;
                    resourceObj = args.rowData.resources;
                }
            }
            if (args.requestType === 'save') {
                if (args.data.resources) {
                    args.data.resources = args.data.resources;
                }
                if (!args.data.Id) {
                    if (Array.isArray(gridObj.dataSource)) {
                        args.data.Id = gridObj.dataSource.length + 1;
                    }
                }
                if (!args.data.resources) {
                    args.data.resources = resourceObj;
                }
                if (args.data.Progress === 100) {
                    args.data.Status = 'Close';
                }
                if (args.data.Progress < 100 && args.data.Status == "Close") {
                    args.data.Progress = 100;
                }
                if (args.data.Progress != 0 && args.data.Status == "Open") {
                    args.data.Status = 'InProgress';
                }
                if (args.data.Progress == 0 && args.data.Status != "Open") {
                    args.data.Status = 'Open';
                }
                updateDataSourceObject(gridObj.dataSource, args.data.Id, args.data);
                window.commonData = gridObj.dataSource;
                setTimeout(function () {
                    gridObj.refresh();
                }, 100);
            }
        },
        dataBound: function (args) {
            updateCardValue(gridObj.dataSource);
        },
        actionComplete: function (args) {
            if (args.requestType != 'refresh') {
                //   updateCardValue()
            }
        },
        toolbarClick: function (args) {
        },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            newRowPosition: 'Top',
            mode: 'Dialog'
        },
    });
    gridObj.appendTo('#component-render-grid');
}
// Kanban
var isDataChanged;
function renderKanban() {
    var progressValue;
    var status;
    var data = window.commonData;
    var customFn = function (args) {
        var value = parseInt(args['value']);
        var kanbanStatusElement = document.getElementsByClassName('Status_wrapper')[0].querySelector('input');
        if (kanbanStatusElement.ej2_instances[0]) {
            if (kanbanStatusElement.ej2_instances[0].value == 'Close' && value < 100) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    kanbanObj = new ej2_kanban_1.Kanban({
        cssClass: "kanban-overview",
        dataSource: data,
        keyField: 'Status',
        enableTooltip: true,
        height: "100%",
        swimlaneSettings: {
            keyField: 'resources'
        },
        dialogClose: function (args) {
            if (args.requestType === 'Edit' && args.name === 'dialogClose') {
                var newProgress = parseInt(args.data.Progress);
                if (newProgress !== progressValue) {
                    if (newProgress === 100) {
                        args.data.Status = 'Close';
                    }
                }
                if (args.data.Progress != 0 && args.data.Status == "Open") {
                    args.data.Status = 'InProgress';
                }
                if (args.data.Progress == 0 && args.data.Status != "Open") {
                    args.data.Status = 'Open';
                }
                if (args.data.Status != storeStatusValue) {
                    isStatusChange = true;
                }
                if (status !== newProgress && newProgress < 100 && args.data.Status === 'Close') {
                    args.data.Progress = 100;
                }
                var targetId_1 = args.data.resources;
                var matchingResource = editingResources.find(function (resource) { return resource.resourceId === targetId_1; });
                if (matchingResource) {
                    args.data.resources = matchingResource.resourceName;
                }
                isDataChanged = true;
            }
            if (args.requestType === 'Add') {
                var targetId_2 = args.data.resources;
                var matchingResource = editingResources.find(function (resource) { return resource.resourceId === targetId_2; });
                if (matchingResource) {
                    args.data.resources = matchingResource.resourceName;
                }
            }
        },
        dialogOpen: function (args) {
            var _a, _b, _c, _d;
            var numericTextboxElement = document.getElementsByClassName("e-numerictextbox")[3];
            if (numericTextboxElement) {
                var ej2Instances = numericTextboxElement.ej2_instances;
                ej2Instances[0].max = 100;
                ej2Instances[0].min = 0;
            }
            var fields = args.element.querySelectorAll('.e-field');
            var isCorrectFields = (((_a = fields[4]) === null || _a === void 0 ? void 0 : _a.getAttribute('name')) === 'StartTime' &&
                ((_b = fields[5]) === null || _b === void 0 ? void 0 : _b.getAttribute('name')) === 'EndTime' &&
                ((_c = fields[6]) === null || _c === void 0 ? void 0 : _c.getAttribute('name')) === 'resources' &&
                ((_d = fields[7]) === null || _d === void 0 ? void 0 : _d.getAttribute('name')) === 'Priority');
            if (args.data) {
                if (args.data.Status) {
                    if (args.requestType === 'Edit') {
                        storeStatusValue = args.data.Status;
                    }
                    else if (args.requestType === 'Add') {
                        isStatusChange = true;
                    }
                }
            }
            if ((args.requestType === 'Add' || args.requestType === 'Edit') && isCorrectFields) {
                var dateTimeInstance = new ej2_calendars_1.DateTimePicker({
                    placeholder: "Select a date and time",
                    value: args.requestType === 'Edit' ? args.data.StartTime : null
                });
                dateTimeInstance.appendTo(fields[4]);
                var dateTimeInstance1 = new ej2_calendars_1.DateTimePicker({
                    placeholder: "Select a date and time",
                    value: args.requestType === 'Edit' ? args.data.EndTime : null
                });
                dateTimeInstance1.appendTo(fields[5]);
                var resourceObject = getResourceObject(args.data.resources);
                var dropDownList = new ej2_dropdowns_1.DropDownList({
                    dataSource: editingResources,
                    fields: { text: 'resourceName', value: 'resourceId' },
                    value: args.requestType === 'Edit' ? resourceObject.resourceId : null
                });
                dropDownList.appendTo(fields[6]);
                var dropDownList1 = new ej2_dropdowns_1.DropDownList({
                    dataSource: priorityDataSource,
                    fields: { text: 'name', value: 'value' },
                    value: args.requestType === 'Edit' ? args.data.Priority : null
                });
                dropDownList1.appendTo(fields[7]);
            }
            // Assign progressValue and status for 'Edit'
            if (args.requestType === 'Edit') {
                progressValue = args.data.Progress;
                status = args.data.Status;
            }
        },
        actionBegin: function (args) {
            if (args.requestType == 'cardChange') {
                if (args.changedRecords[0].Status == "Close") {
                    args.changedRecords[0].Progress = 100;
                }
                isDataChanged = true;
                if (storeStatusValue != args.changedRecords[0].Status) {
                    isStatusChange = true;
                }
            }
        },
        cardSettings: {
            headerField: 'Id',
            template: "#cardTemplate"
        },
        actionComplete: function (args) {
        },
        dataBound: function (args) {
            if (isDataChanged) {
                var updatedData = kanbanObj.dataSource;
                window.commonData = updatedData;
                isDataChanged = false;
                if (isStatusChange) {
                    updateCardValue(kanbanObj.dataSource);
                    isStatusChange = false;
                }
            }
            if (args.requestType == "cardCreated") {
                if (isStatusChange) {
                    updateCardValue(kanbanObj.dataSource);
                    var projectValue = topDropDownInstance.value;
                    switch (projectValue) {
                        case 'Project1':
                            window.sprintData1 = kanbanObj.dataSource;
                            window.commonData = kanbanObj.dataSource;
                            break;
                        case 'Project2':
                            window.sprintData2 = kanbanObj.dataSource;
                            window.commonData = kanbanObj.dataSource;
                            break;
                        case 'Project3':
                            window.sprintData3 = kanbanObj.dataSource;
                            window.commonData = kanbanObj.dataSource;
                            break;
                    }
                    isStatusChange = false;
                }
            }
        },
        dialogSettings: {
            fields: [
                { key: 'Id', text: 'ID', type: 'TextBox' },
                { key: 'Subject', text: 'Subject', type: 'TextArea' },
                { key: 'Status', text: 'Status', type: 'DropDown' },
                { key: 'Progress', text: 'Progress', type: 'Numeric', validationRules: { required: true, minLength: [customFn, 'Progress Cant be less than 100 if the status is in close'] } },
                { key: 'StartTime', text: 'StartTime' },
                { key: 'EndTime', text: 'EndTime' },
                { key: 'resources', text: 'Resources', validationRules: { required: true } },
                { key: 'Priority', text: 'Priority' }
            ],
        },
        cardRendered: function (args) {
            var _a;
            var priority = (_a = args.data) === null || _a === void 0 ? void 0 : _a.Priority;
            if (priority) {
                var val = (args.data).Priority;
                (0, ej2_base_1.addClass)([args.element], val);
            }
        },
        columns: [
            { headerText: 'To Do', keyField: 'Open', template: '#headerTemplate' },
            { headerText: 'In Progress', keyField: 'InProgress', template: '#headerTemplate' },
            { headerText: 'Testing', keyField: 'Testing', template: '#headerTemplate' },
            { headerText: 'Done', keyField: 'Close', template: '#headerTemplate' }
        ],
    });
    kanbanObj.appendTo('#component-renderf');
}
window.getTags = function (data) {
    var tagDiv = '';
    if (data) {
        var tags = data.split(',');
        for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
            var tag = tags_1[_i];
            tagDiv += '<div class="e-card-tag-field e-tooltip-text">' + tag + '</div>';
        }
    }
    return tagDiv;
};
window.getBoolean = function (data) {
    var tempDiv = '';
    var progressWidth = data.Progress + "%";
    if (data.Status != 'Open' && data.Status != 'Close') {
        tempDiv += '<div className="e-progress-bar" style="padding-left: 12px;"><div className="e-progress-bar-container"><div className="e-progress-bar-background" style="width: 100%;"><div className="e-progress-bar-progress" style="width:' + progressWidth + '; background: rgba(173, 216, 230); height: 5px;"></div><div className="e-progress-bar-text" >' + progressWidth + '</div></div></div></div>';
    }
    return tempDiv;
};
window.getResourceName = function (data) {
    if (data.resources) {
        var tempDiv = '';
        tempDiv += '<div class="e-card-header-title e-tooltip-text">' + data.resources + '</div>';
        return tempDiv;
    }
};
window.getKanbanResorurceImage = function (data) {
    if (data.resources) {
        var tempDiv = '';
        var resourceName = data.resources;
        tempDiv += '<img className="e-card-avatar" style="width: 30px;height: 30px;text-align: center;background: gainsboro;color: #6b6b6b;border-radius: 50%;position: absolute;right: 12px;bottom: 10px;font-size: 12px;font-weight: 400;" src="//ej2.syncfusion.com/demos/src/gantt/images/' + resourceName + '.png"/>';
        return tempDiv;
    }
};
window.getGanttResourceImage = function (data) {
    var tempDiv = '';
    var resourceName = data.resources;
    if (data.resources) {
        tempDiv += '<div class="image"><img src="//ej2.syncfusion.com/demos/src/gantt/images/' + resourceName + '.png" style="height:40px;width:40px;margin-right:8px;" /><div style="display:inline-block;width:100%;position:relative;}">' + resourceName + '</div></div>';
    }
    return tempDiv;
};
window.getGridResourceImage = function (data) {
    var tempDiv = '';
    var resourceName = data.resources[0];
    if (data.resources) {
        tempDiv += '<div class="image"><img src="//ej2.syncfusion.com/demos/src/gantt/images/' + resourceName.resourceName + '.png" style="height:40px;width:40px;margin-right:8px;" /><div style="display:inline-block;width:100%;position:relative;}">' + resourceName.resourceName + '</div></div>';
    }
    return tempDiv;
};
// Gantt
var elem;
var elem3;
var dropdownlistObj;
var dropdownlistObj3;
var elem1;
var dropdownlistObj1;
var updateDataSourceObject = function (dataSource, id, updateData) {
    var targetObject = dataSource.find(function (obj) { return obj.Id === id; });
    if (targetObject) {
        // Update the object with the provided data
        for (var key in updateData) {
            targetObject[key] = updateData[key];
        }
    }
};
function calculateDiff() {
    var element1 = document.getElementsByClassName("topImage")[0].getBoundingClientRect();
    var element2 = document.getElementsByClassName("userImage")[0].getBoundingClientRect();
    // Calculate the vertical distance between the elements
    var verticalDistance = Math.abs(element2.top - element1.top);
    return verticalDistance;
}
function adjustGanttHeight() {
    var viewportHeight = window.innerHeight;
    var ganttHeight = 0.5 * viewportHeight;
    var ganttBottom = gantt.element.getBoundingClientRect().bottom;
    if (ganttBottom > viewportHeight) {
        gantt.element.style.height = viewportHeight - gantt.element.offsetTop - 300 + 'px';
    }
    else {
        gantt.element.style.height = ganttHeight + 'px';
    }
    gantt.element.style.overflow = "scroll";
    var paddingBottom = 0.17 * viewportHeight;
    //(document.getElementsByClassName("topImage")[0] as HTMLElement).style.paddingBottom = paddingBottom +'px';
    // (document.getElementsByClassName("userImage")[0] as HTMLElement).style.paddingTop = paddingBottom +'px';
    // var windowHeight = window.innerHeight;
    // var ganttHeightPercentage = 60; // Adjust this percentage based on your requirement
    // var ganttHeight = (windowHeight * ganttHeightPercentage) / 100;
    // var paddingPercentage =  (21/100) * windowHeight;
    // let verticalHeight: number = calculateDiff();
    // const paddingBottomValue: number = 0.23 * verticalHeight;
    // (document.getElementsByClassName("topImage")[0] as HTMLElement).style.paddingBottom = `${paddingBottomValue}px`;
    // tabObj.height = windowHeight  + "px";
    // (<HTMLElement>document.getElementsByClassName("e-tab-header")[0]).style.height = windowHeight  + "px";
    // setTimeout(function() {
    //   gantt.height = ganttHeight + "px";
    //   const ganttElement = document.getElementById('Gantt') as any;
    //   const ganttInstance = ganttElement.ej2_instances[0];
    //   const ganttHeight1 = ganttHeight + "px";
    //   ganttInstance.height = (ganttHeight + 7) + "px";
    // }, 100);
}
function adjustKanbanHeight() {
    var viewportHeight = window.innerHeight;
    var kanbanHeight = 0.45 * viewportHeight;
    var kanbanBottom = kanbanObj.element.getBoundingClientRect().bottom;
    if (kanbanBottom > viewportHeight) {
        kanbanObj.element.style.height = viewportHeight - kanbanObj.element.offsetTop - 290 + 'px';
    }
    else {
        kanbanObj.element.style.height = kanbanHeight + 'px';
    }
    kanbanObj.element.style.overflow = "scroll";
}
function adjustSchedulerHeight() {
    var viewportHeight = window.innerHeight;
    var SchedulerHeight = 0.45 * viewportHeight;
    var SchedulerBottom = scheduleObj.element.getBoundingClientRect().bottom;
    if (SchedulerBottom > viewportHeight) {
        scheduleObj.element.style.height = viewportHeight - scheduleObj.element.offsetTop - 290 + 'px';
    }
    else {
        scheduleObj.element.style.height = SchedulerHeight + 'px';
    }
    scheduleObj.element.style.overflow = "scroll";
}
function adjustGridHeight() {
    var viewportHeight = window.innerHeight;
    var gridHeight = 0.5 * viewportHeight;
    var gridBottom = gridObj.element.getBoundingClientRect().bottom;
    if (gridBottom > viewportHeight) {
        gridObj.element.style.height = viewportHeight - gridObj.element.offsetTop - 290 + 'px';
    }
    else {
        gridObj.element.style.height = gridHeight + 'px';
    }
    gridObj.element.style.overflow = "scroll";
}
function adjustResourceImageHeight() {
    var viewportWidth = window.innerWidth;
    var targetImageSize = 37;
    var targetLeftValue = 30;
    var imageLeftPercentage = 2;
    var sizePercentage = 3.5;
    var imageSize = viewportWidth * (sizePercentage / 100);
    var imageLeft = viewportWidth * (imageLeftPercentage / 100);
    var newSize = Math.min(imageSize, targetImageSize);
    var newLeftSize = Math.min(imageLeft, targetLeftValue);
    var imageContainer = document.querySelector('.image-container');
    if (imageContainer) {
        var images = imageContainer.querySelectorAll('img');
        var leftValue_1 = 0;
        images.forEach(function (img, index) {
            img.style.width = newSize + 'px';
            img.style.height = newSize + 'px';
            if (index !== 0) {
                if (window.innerWidth > 1500) {
                    leftValue_1 += (newLeftSize + (newLeftSize * 0.25));
                }
                else {
                    leftValue_1 += (newLeftSize + (newLeftSize * 0.3));
                }
            }
            img.style.left = (newLeftSize + leftValue_1) + 'px';
        });
    }
}
function adjustDropDownHeight() {
    var viewportWidth = window.innerWidth;
    var sizePercentage = 16;
    var elementSize = viewportWidth * (sizePercentage / 100);
    var newSize = Math.min(elementSize, 200);
    timeRageWidth = newSize;
    var elementContainers = document.querySelectorAll('.datasourceDropDownParent, .timerangecompoParent');
    elementContainers.forEach(function (elementContainer) {
        var firstElement = elementContainer.querySelector('span');
        if (firstElement) {
            firstElement.style.width = newSize + 'px';
        }
    });
    adjustDropDownLeft();
}
function adjustDropDownLeft() {
    var element = document.querySelector('.e-tab-header.e-vertical.e-vertical-left.e-control.e-toolbar.e-lib.e-keyboard');
    var contentPadding = document.querySelector('.e-item.e-active');
    if (element && contentPadding) {
        var width_1 = parseInt(window.getComputedStyle(element).width);
        var styles = window.getComputedStyle(contentPadding);
        var paddingLeft_1 = parseFloat(styles.paddingLeft);
        var dataSourceContainers = document.querySelectorAll('.datasourceDropDownParent');
        dataSourceContainers.forEach(function (element) {
            var elementContainer = element;
            elementContainer.style.left = (width_1 + paddingLeft_1) + 'px';
        });
        if (contentPadding instanceof HTMLElement) {
            var styles_1 = window.getComputedStyle(contentPadding);
            var paddingRight_1 = parseFloat(styles_1.paddingRight);
            var width_2 = contentPadding.offsetWidth;
            var tabWidth_1 = parseInt(window.getComputedStyle(element).width);
            var timeRangeContainers = document.querySelectorAll('.timerangecompoParent');
            timeRangeContainers.forEach(function (element) {
                var elementContainer = element;
                var widthWithPaddingBorderScrollbar = elementContainer.offsetWidth;
                var spanElement = elementContainer.querySelector('span');
                if (spanElement) {
                    widthWithPaddingBorderScrollbar = spanElement.offsetWidth;
                }
                elementContainer.style.left = (tabWidth_1 + width_2 - widthWithPaddingBorderScrollbar - paddingRight_1 - paddingRight_1) + 'px';
                var imageContainer = document.querySelector('.image-container');
                if (imageContainer) {
                    imageContainer.style.left = parseInt(elementContainer.style.left) - widthWithPaddingBorderScrollbar + 'px';
                }
            });
            // const width1 = element1.clientWidth;
            // const timeRangeContainers = document.querySelectorAll('.timerangecompoParent');
            // timeRangeContainers.forEach(element => {
            //   const elementContainer = element as HTMLElement;
            //   if (width1 > 300) {
            //     elementContainer.style.left =(width1-260)  + 'px';
            //     const imageContainer = document.querySelector('.image-container') as HTMLElement;
            //     if (imageContainer) {
            //       imageContainer.style.left = (width1-260 - timeRageWidth) +'px'
            //     }
            //   } else {
            //     elementContainer.style.left =(width1-50)  + 'px';
            //     const imageContainer = document.querySelector('.image-container') as HTMLElement;
            //     if (imageContainer) {
            //       imageContainer.style.left = (width1-50 - timeRageWidth) +'px'
            //     }
            //   }
            // });
        }
    }
}
function renderGantt() {
    var progressValue;
    var isProgressResize;
    var status;
    (0, ej2_base_2.registerLicense)('');
    var customFn = function (args) {
        var value = parseInt(args['value']);
        var ganttStatusElement = document.getElementById('component-render-ganttStatus');
        if (ganttStatusElement) {
            if (ganttStatusElement.ej2_instances[0].value == "Close" && value < 100) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (status == "Close" && value < 100) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    gantt = new ej2_gantt_1.Gantt({
        dataSource: window.commonData,
        treeColumnIndex: 1,
        viewType: "ResourceView",
        collapseAllParentTasks: false,
        height: "100%",
        taskFields: {
            id: 'Id',
            name: 'Subject',
            startDate: 'StartTime',
            endDate: 'EndTime',
            duration: 'Duration',
            resourceInfo: 'resources',
            progress: 'Progress',
            dependency: 'Predecessor',
        },
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'],
        columns: [
            { field: 'Id' },
            { field: 'Subject', width: '350px' },
            { field: 'StartTime' },
            { field: 'EndTime' },
            { field: 'Progress', validationRules: { required: true, minLength: [customFn, 'Progress Cant be less than 100 if the status is in close'] } },
            {
                field: 'Status',
                edit: {
                    create: function () {
                        elem = document.createElement('input');
                        return elem;
                    },
                    read: function () {
                        return dropdownlistObj.value;
                    },
                    destroy: function () {
                        dropdownlistObj.destroy();
                    },
                    write: function (args) {
                        dropdownlistObj = new ej2_dropdowns_1.DropDownList({
                            dataSource: [
                                { Status: 'Open' },
                                { Status: 'Testing' },
                                { Status: 'InProgress' },
                                { Status: 'Close' },
                            ],
                            fields: { value: 'Status' },
                            value: args.rowData[args.column.field],
                            floatLabelType: 'Auto',
                        });
                        dropdownlistObj.appendTo(elem);
                    },
                },
            },
            {
                field: 'Priority',
                edit: {
                    create: function () {
                        elem3 = document.createElement('input');
                        return elem3;
                    },
                    read: function () {
                        return dropdownlistObj3.value;
                    },
                    destroy: function () {
                        dropdownlistObj3.destroy();
                    },
                    write: function (args) {
                        dropdownlistObj3 = new ej2_dropdowns_1.DropDownList({
                            dataSource: [
                                { Priority: 'Low' },
                                { Priority: 'Critical' },
                                { Priority: 'Normal' },
                                { Priority: 'High' },
                            ],
                            fields: { value: 'Priority' },
                            value: args.rowData[args.column.field],
                            floatLabelType: 'Auto',
                        });
                        dropdownlistObj3.appendTo(elem3);
                    },
                },
            },
            { field: 'resources', template: '#columnTemplate' },
        ],
        created: function (args) {
        },
        dataBound: function (args) {
            updateCardValue(gantt.dataSource);
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            mode: 'Dialog',
        },
        queryTaskbarInfo: function (args) {
            if (args.data.taskData.Status == 'InProgress') {
                args.progressBarBgColor = 'rgba(201, 167, 244, 1)';
                args.taskbarBgColor = 'rgba(201, 167, 244, 0.4)';
                args.taskbarBorderColor = 'rgba(201, 167, 244, 1)';
            }
            else if (args.data.taskData.Status == 'Open') {
                args.progressBarBgColor = 'rgba(194, 220, 240, 1)';
                args.taskbarBgColor = 'rgba(194, 220, 240, 0.4)';
                args.taskbarBorderColor = 'rgba(194, 220, 240, 1)';
            }
            else if (args.data.taskData.Status == 'Close') {
                args.progressBarBgColor = 'rgba(182, 214, 171, 1)';
                args.taskbarBgColor = 'rgba(182, 214, 171, 0.4)';
                args.taskbarBorderColor = 'rgba(182, 214, 171, 1)';
            }
            else if (args.data.taskData.Status == 'Testing') {
                args.progressBarBgColor = 'rgba(244, 218, 168, 1)';
                args.taskbarBgColor = 'rgba(244, 218, 168, 0.4)';
                args.taskbarBorderColor = 'rgba(244, 218, 168, 1)';
            }
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        resources: editingResources,
        // labelSettings: {
        //   rightLabel: 'resources',
        //   taskLabel: '${Progress}%',
        // },
        actionBegin: function (args) {
            if (args.type == 'edit' || args.requestType == 'beforeOpenEditDialog') {
                progressValue = args.rowData.Progress;
                status = args.rowData.Status;
            }
            else if (args.taskBarEditAction == 'ProgressResizing') {
                progressValue = args.data.Progress;
                isProgressResize = true;
            }
            if (args.requestType == 'beforeSave') {
                if (progressValue != args.data.Progress) {
                    if (args.data.Progress == 100) {
                        args.data.Status = 'Close';
                        args.data.taskData.Status = 'Close';
                    }
                }
                if (args.data.Progress != 0 && args.data.Status == "Open") {
                    args.data.Status = 'InProgress';
                    args.data.taskData.Status = 'InProgress';
                }
                if (args.data.Progress == 0 && args.data.Status != "Open") {
                    args.data.Status = 'Open';
                    args.data.taskData.Status = 'Open';
                }
                if (status != args.data.Status) {
                    if (args.data.Progress < 100 && args.data.Status == "Close" && !isProgressResize) {
                        args.data.Progress = 100;
                        args.data.taskData.Progress = 100;
                        args.data.ganttProperties.progress = 100;
                        updateDataSourceObject(gantt.dataSource, args.data.Id, { Progress: args.data.Progress, Status: args.data.Status });
                        window.commonData = gantt.dataSource;
                    }
                }
                if (isProgressResize) {
                    if (args.data.Progress < 100 && args.data.Status == "Close") {
                        args.data.Status = 'InProgress';
                        args.data.taskData.Status = 'InProgress';
                    }
                    isProgressResize = false;
                }
            }
            if (args.requestType == 'beforeOpenEditDialog' ||
                args.requestType == 'beforeOpenAddDialog') {
                args.Resources.columns.splice(0, 1);
            }
        },
        actionComplete: function (args) {
            if (args.requestType == 'openEditDialog' ||
                args.requestType == 'openAddDialog') {
                var resources = args.data.ganttProperties.resourceInfo;
                var tabObj_1 = document.getElementById(gantt.element.id + '_Tab')['ej2_instances'][0];
                tabObj_1.selected = function (args) {
                    if (args.selectedIndex == 2) {
                        var gridObj_1 = document.getElementById(gantt.element.id + 'ResourcesTabContainer_gridcontrol')['ej2_instances'][0];
                        gridObj_1.selectionSettings = {
                            checkboxOnly: false,
                            type: 'Single',
                            persistSelection: false,
                        };
                        var currentViewData = gridObj_1.getCurrentViewRecords();
                        var indexs_1 = [];
                        if (resources && resources.length > 0) {
                            currentViewData.forEach(function (data, index) {
                                for (var i = 0; i < resources.length; i++) {
                                    if (data.taskData['resourceId'] ===
                                        resources[i]['resourceId'] &&
                                        gridObj_1.selectionModule &&
                                        gridObj_1.getSelectedRowIndexes().indexOf(index) === -1) {
                                        indexs_1.push(index);
                                    }
                                }
                                gridObj_1.selectRows(indexs_1);
                            });
                        }
                    }
                };
            }
            if (args.requestType == "save" || args.requestType == "add" || args.requestType == "delete") {
                if (args.requestType == "delete") {
                    var dataSourceArray = gantt.dataSource;
                    var storeArgs = args;
                    var newArray = dataSourceArray.filter(function (item) {
                        return item.Id !== storeArgs.data[0].Id;
                    });
                    gantt.dataSource = newArray;
                    window.commonData = gantt.dataSource;
                    gridObj.dataSource = window.commonData;
                    scheduleObj.eventSettings.dataSource = window.commonData;
                    scheduleObj.resources[1].dataSource = window.commonData;
                    kanbanObj.dataSource = window.commonData;
                }
                updateCardValue(gantt.dataSource);
            }
        },
        rowHeight: 60,
    });
    gantt.appendTo('#component-render-gantt');
}
//resize event
// window.addEventListener("resize", adjustGanttHeight);
// window.addEventListener('resize', adjustKanbanHeight);
// window.addEventListener('resize', adjustSchedulerHeight);
// window.addEventListener('resize', adjustGridHeight);
// //window.addEventListener('resize', adjustDropDownHeight);
// window.addEventListener('resize', adjustResourceImageHeight);
//
// Scheduler 
var applyCategoryColor = function (args, currentView) {
    if (!args.element) {
        return;
    }
    if (args.data.Status == 'Close') {
        args.element.style.backgroundColor = 'rgba(182, 214, 171, 1)';
    }
    else if (args.data.Status == 'Open') {
        args.element.style.backgroundColor = 'rgba(194, 220, 240, 1)';
    }
    else if (args.data.Status == 'InProgress') {
        args.element.style.backgroundColor = 'rgba(201, 167, 244, 1)';
        args.element.style.border = 'rgba(160, 133, 195, 1)';
    }
    else if (args.data.Status == 'Testing') {
        args.element.style.backgroundColor = 'rgba(244, 218, 168, 1)';
    }
};
function renderScheduler() {
    var progressValue;
    var status;
    var dropDownList;
    scheduleObj = new ej2_schedule_1.Schedule({
        height: '100%',
        selectedDate: new Date(2021, 0, 14),
        eventSettings: { dataSource: window.commonData },
        popupOpen: function (args) {
            if (args.type === 'Editor') {
                storeScheduleEditID = args.data.Id;
                progressValue = args.data.Progress;
                status = args.data.Status;
                // Create required custom elements in initial time
                var formElement = args.element.querySelector('.e-schedule-form');
                if (formElement && !formElement.querySelector('.custom-field-row')) {
                    var row = document.createElement('div');
                    row.className = 'custom-field-row';
                    // Create a label for the input element
                    var label = document.createElement('label');
                    label.textContent = 'Status';
                    // Remove font-weight styles from the label
                    label.style.fontWeight = 'normal'; // Or 'unset'
                    var container = document.createElement('div');
                    container.className = 'custom-field-container';
                    var inputEle = document.createElement('input');
                    inputEle.className = 'e-field';
                    inputEle.name = 'Status';
                    container.appendChild(inputEle);
                    row.appendChild(label); // Append the label
                    row.appendChild(container);
                    formElement.insertBefore(row, formElement.firstChild);
                    var dropDownList_1 = new ej2_dropdowns_1.DropDownList({
                        dataSource: [
                            { text: 'Open', value: 'Open' },
                            { text: 'Testing', value: 'Testing' },
                            { text: 'InProgress', value: 'InProgress' },
                            { text: 'Close', value: 'Close' },
                        ],
                        fields: { text: 'text', value: 'value' },
                        value: args.data.Status,
                    });
                    dropDownList_1.appendTo(inputEle);
                }
                if (formElement && !formElement.querySelector('.custom-field-row-priority')) {
                    var row = document.createElement('div');
                    row.className = 'custom-field-row-priority';
                    // Create a label for the input element
                    var label = document.createElement('label');
                    label.textContent = 'Priority';
                    // Remove font-weight styles from the label
                    label.style.fontWeight = 'normal'; // Or 'unset'
                    var container = document.createElement('div');
                    container.className = 'custom-field-priority';
                    var inputEle = document.createElement('input');
                    inputEle.className = 'e-field';
                    inputEle.name = 'Priority';
                    container.appendChild(inputEle);
                    row.appendChild(label); // Append the label
                    row.appendChild(container);
                    formElement.insertBefore(row, formElement.firstChild);
                    var dropDownList_2 = new ej2_dropdowns_1.DropDownList({
                        dataSource: [
                            { text: 'Low', value: 'Low' },
                            { text: 'Normal', value: 'Normal' },
                            { text: 'Critical', value: 'Critical' },
                            { text: 'High', value: 'High' },
                        ],
                        fields: { text: 'text', value: 'value' },
                        value: args.data.Priority,
                    });
                    dropDownList_2.appendTo(inputEle);
                }
                if (formElement &&
                    !formElement.querySelector('.custom-field-row-progress')) {
                    var row = document.createElement('div');
                    row.className = 'custom-field-row-progress';
                    row.style.paddingBottom = '10px';
                    // Create a label for the header text
                    var headerLabel = document.createElement('label');
                    headerLabel.textContent = 'Progress';
                    // Remove font-weight styles from the label
                    headerLabel.style.fontWeight = 'normal'; // Or 'unset'
                    var container = document.createElement('div');
                    container.className = 'custom-field-progress';
                    var inputEle_1 = document.createElement('input');
                    inputEle_1.className = 'e-field';
                    inputEle_1.name = 'Progress';
                    // Set the type to "number" to create a numeric input
                    inputEle_1.type = 'number';
                    inputEle_1.style.width = '100%';
                    inputEle_1.max = "100";
                    inputEle_1.min = "0";
                    var errorMessage_1 = document.createElement('span');
                    errorMessage_1.className = 'error-message';
                    errorMessage_1.style.color = 'red';
                    errorMessage_1.style.display = 'none'; // Initially hide the error message
                    inputEle_1.addEventListener('focusout', function (event) {
                        var schedulerStatusElement = document.getElementsByClassName('custom-field-row')[0].querySelector('input');
                        var buttonElement = document.querySelector('.e-schedule-dialog.e-control.e-btn.e-lib.e-primary.e-event-save.e-flat');
                        var enteredValue = parseInt(inputEle_1.value, 10);
                        if (enteredValue < 0) {
                            inputEle_1.value = '0'; // Set value as string '0'
                        }
                        if (enteredValue > 100) {
                            inputEle_1.value = '100';
                        }
                        if (schedulerStatusElement.ej2_instances[0].value == "Close" && enteredValue < 100) {
                            errorMessage_1.textContent = 'Progress Cant be less than 100 if the status is in close';
                            errorMessage_1.style.display = 'block';
                            event.currentTarget.style.borderColor = 'red';
                            buttonElement.disabled = true;
                        }
                        else {
                            errorMessage_1.style.display = 'none';
                            event.currentTarget.style.borderColor = '';
                            buttonElement.disabled = false;
                        }
                    });
                    inputEle_1.value = args.data.Progress;
                    container.appendChild(inputEle_1);
                    row.appendChild(headerLabel);
                    row.appendChild(container);
                    row.appendChild(errorMessage_1);
                    formElement.insertBefore(row, formElement.firstChild);
                }
            }
        },
        currentView: 'TimelineMonth',
        eventRendered: function (args) {
            applyCategoryColor(args, scheduleObj.currentView);
        },
        actionBegin: function (args) {
            if (args.requestType == 'eventCreate') {
                if (args.data[0].resources) {
                    var foundObject = editingResources.find(function (obj) { return obj.resourceName === args.data[0].resources; });
                    args.data[0].resources = foundObject.resourceName;
                }
            }
            if (args.requestType == 'eventChange') {
                if (args.data.resources) {
                    var foundObject = editingResources.find(function (obj) { return obj.resourceName === args.data.resources; });
                    args.data.resources = foundObject.resourceName;
                }
                if (progressValue != parseInt(args.data.Progress)) {
                    if (args.data.Progress == 100) {
                        args.data.Status = 'Close';
                    }
                }
                if (status != args.data.Status) {
                    if (args.data.Progress < 100 && args.data.Status == "Close") {
                        args.data.Progress = 100;
                    }
                }
                if (args.data.Progress != 0 && args.data.Status == "Open") {
                    args.data.Status = 'InProgress';
                }
                if (args.data.Progress == 0 && args.data.Status != "Open") {
                    args.data.Status = 'Open';
                }
                if (Array.isArray(scheduleObj.eventSettings.dataSource)) {
                    var dataSource = scheduleObj.eventSettings.dataSource;
                    var idToMatch_1 = storeScheduleEditID;
                    dataSource.forEach(function (item) {
                        if (item.Id === idToMatch_1) {
                            item = args.data;
                            item.Id = idToMatch_1;
                            return;
                        }
                    });
                }
            }
        },
        actionComplete: function (args) {
            if (args.requestType != 'toolBarItemRendered') {
                setTimeout(function () {
                    scheduleObj.refresh();
                }, 0);
            }
        },
        dataBound: function (args) {
            updateCardValue(scheduleObj.eventSettings.dataSource);
        },
        group: {
            resources: ['Projects', 'Categories'],
        },
        resources: [
            {
                field: 'resources',
                title: 'Resources',
                name: 'Projects',
                dataSource: editingResources,
                textField: 'resourceName',
                idField: 'resourceName',
            },
            {
                field: 'Id',
                title: 'Category',
                name: 'Categories',
                //  allowMultiple: true,
                dataSource: window.commonData,
                textField: 'Subject',
                idField: 'Id',
                groupIDField: 'resources',
            },
        ],
        views: [
            'TimelineDay',
            'TimelineWeek',
            'TimelineWorkWeek',
            'TimelineMonth',
            'Agenda',
        ],
    });
    scheduleObj.appendTo("#component-render-scheduler");
}
function updateCardValue(passedData) {
    var projectValue = topDropDownInstance.value;
    var dateRangeValue = dateRangeInstance.value;
    var currentData = passedData ? passedData : window["sprintData".concat(projectValue.slice(-1))];
    var counts = {
        InProgress: 0,
        Testing: 0,
        Open: 0,
        Close: 0,
    };
    currentData.forEach(function (item) {
        counts[item.Status]++;
    });
    updateCardElement('.detailcontainertodo', counts.Open, 0);
    updateCardElement('.detailcontainertodo', counts.InProgress, 1);
    updateCardElement('.detailcontainertodo', counts.Testing, 2);
    updateCardElement('.detailcontainertodo', counts.Close, 3);
}
function updateCardElement(selector, count, indexNumber) {
    var cardElement = document.querySelectorAll(selector)[indexNumber];
    var countTodoElement = cardElement === null || cardElement === void 0 ? void 0 : cardElement.querySelector('.counttodo');
    if (countTodoElement) {
        countTodoElement.innerHTML = count.toString();
    }
}
function bindClickEvent() {
    var anchorTags = document.querySelectorAll('body a');
    if (anchorTags) {
        for (var i = 0; i < anchorTags.length; i++) {
            var currentAnchor = anchorTags[i];
            if (currentAnchor) {
                if (currentAnchor.textContent && currentAnchor.textContent.trim() === 'Claim your free account') {
                    var parentElement = currentAnchor.parentElement;
                    if (parentElement) {
                        parentElement.remove();
                    }
                }
            }
        }
    }
    var imageContainer = document.getElementById('image-container');
    if (imageContainer) {
        var circularImages_1 = imageContainer.querySelectorAll('.circular-image1');
        circularImages_1.forEach(function (image) {
            image.addEventListener('click', function (event) {
                var target = event.target;
                if (target.tagName === 'IMG') {
                    var altText = target.alt;
                    if (altText) {
                        if (resourceSelectValue == altText) {
                            altText = null;
                        }
                        resourceSelectValue = altText;
                        resourceFilterImage(altText);
                        if (target.classList.contains('selected-image')) {
                            target.classList.remove('selected-image');
                        }
                        else {
                            circularImages_1.forEach(function (img) {
                                img.classList.remove('selected-image');
                            });
                            // Add box shadow to the clicked image
                            target.classList.add('selected-image');
                        }
                    }
                }
            });
        });
    }
}
function bindTabClickEvent() {
    var kanban = document.getElementById("component-renderf");
    var scheduler = document.getElementById("component-render-scheduler");
    var gantt1 = document.getElementById("component-render-gantt");
    var grid = document.getElementById("component-render-grid");
    kanban.classList.add("show1");
    var setActiveTab = function (activeTab, backgroundClass) {
        var elements = [
            document.getElementsByClassName("parent-kanban1")[0],
            document.getElementsByClassName("parent-scheduler1")[0],
            document.getElementsByClassName("parent-gantt1")[0],
            document.getElementsByClassName("parent-grid1")[0]
        ];
        elements.forEach(function (element) {
            if (element) {
                element.classList.remove("show1-background");
            }
        });
        if (activeTab) {
            activeTab.classList.add("show1-background");
        }
        [kanban, scheduler, gantt1, grid].forEach(function (component) {
            if (component) {
                component.classList.remove("show1");
            }
        });
        if (activeTab === document.getElementsByClassName("parent-kanban1")[0]) {
            kanban === null || kanban === void 0 ? void 0 : kanban.classList.add("show1");
            kanbanObj.refresh();
        }
        else if (activeTab === document.getElementsByClassName("parent-scheduler1")[0]) {
            scheduler === null || scheduler === void 0 ? void 0 : scheduler.classList.add("show1");
            scheduleObj.refresh();
        }
        else if (activeTab === document.getElementsByClassName("parent-gantt1")[0]) {
            gantt1 === null || gantt1 === void 0 ? void 0 : gantt1.classList.add("show1");
            setTimeout(function () {
                gantt.refresh();
            }, 0);
        }
        else if (activeTab === document.getElementsByClassName("parent-grid1")[0]) {
            grid === null || grid === void 0 ? void 0 : grid.classList.add("show1");
            gridObj.refresh();
            // setTimeout(() => {
            //   gridObj.refresh();
            // }, 0);
        }
    };
    setActiveTab(document.getElementsByClassName("parent-kanban1")[0], "show1-background");
    var parentElement = document.getElementsByClassName("centered-div1")[0];
    parentElement === null || parentElement === void 0 ? void 0 : parentElement.childNodes.forEach(function (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            var element = node;
            element.addEventListener("click", function (e) {
                if (e.target.classList.contains("navimage-kanban1") || e.target.classList.contains("parent-kanban1")) {
                    setActiveTab(document.getElementsByClassName("parent-kanban1")[0], "show1-background");
                }
                else if (e.target.classList.contains("navimage-scheduler1") || e.target.classList.contains("parent-scheduler1")) {
                    setActiveTab(document.getElementsByClassName("parent-scheduler1")[0], "show1-background");
                }
                else if (e.target.classList.contains("navimage-gantt1") || e.target.classList.contains("parent-gantt1")) {
                    setActiveTab(document.getElementsByClassName("parent-gantt1")[0], "show1-background");
                }
                else if (e.target.classList.contains("navimage-grid1") || e.target.classList.contains("parent-grid1")) {
                    setActiveTab(document.getElementsByClassName("parent-grid1")[0], "show1-background");
                }
            });
        }
    });
}
function bindEventListeners() {
    var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    var clickOrTouchEvent = isTouchDevice ? 'touchstart' : 'click';
    var kanban = document.getElementById("component-renderf");
    var scheduler = document.getElementById("component-render-scheduler");
    var gantt1 = document.getElementById("component-render-gantt");
    var grid = document.getElementById("component-render-grid");
    kanban.classList.add("show1");
    var setActiveTab = function (activeTab, backgroundClass) {
        var elements = [
            document.getElementsByClassName("parent-kanban1")[1],
            document.getElementsByClassName("parent-scheduler1")[1],
            document.getElementsByClassName("parent-gantt1")[1],
            document.getElementsByClassName("parent-grid1")[1]
        ];
        elements.forEach(function (element) {
            if (element) {
                element.classList.remove("show1-background");
            }
        });
        if (activeTab) {
            activeTab.classList.add("show1-background");
        }
        [kanban, scheduler, gantt1, grid].forEach(function (component) {
            if (component) {
                component.classList.remove("show1");
            }
        });
        if (activeTab === document.getElementsByClassName("parent-kanban1")[1]) {
            kanban === null || kanban === void 0 ? void 0 : kanban.classList.add("show1");
            scheduleObj.refresh();
            kanbanObj.refresh();
        }
        else if (activeTab === document.getElementsByClassName("parent-scheduler1")[1]) {
            scheduler === null || scheduler === void 0 ? void 0 : scheduler.classList.add("show1");
            kanbanObj.refresh();
            scheduleObj.refresh();
        }
        else if (activeTab === document.getElementsByClassName("parent-gantt1")[1]) {
            gantt1 === null || gantt1 === void 0 ? void 0 : gantt1.classList.add("show1");
            scheduleObj.refresh();
            kanbanObj.refresh();
            setTimeout(function () {
                gantt.refresh();
            }, 0);
        }
        else if (activeTab === document.getElementsByClassName("parent-grid1")[1]) {
            grid === null || grid === void 0 ? void 0 : grid.classList.add("show1");
            scheduleObj.refresh();
            kanbanObj.refresh();
            gantt.refresh();
            gridObj.refresh();
        }
    };
    var parentElement = document.getElementsByClassName("mobile-nav-bar1")[0];
    parentElement === null || parentElement === void 0 ? void 0 : parentElement.childNodes.forEach(function (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            var element = node;
            element.addEventListener(clickOrTouchEvent, function (e) {
                if (e.target.classList.contains("navimage-kanban1") || e.target.classList.contains("parent-kanban1")) {
                    setActiveTab(document.getElementsByClassName("parent-kanban1")[1], "show1-background");
                }
                else if (e.target.classList.contains("navimage-scheduler1") || e.target.classList.contains("parent-scheduler1")) {
                    setActiveTab(document.getElementsByClassName("parent-scheduler1")[1], "show1-background");
                }
                else if (e.target.classList.contains("navimage-gantt1") || e.target.classList.contains("parent-gantt1")) {
                    setActiveTab(document.getElementsByClassName("parent-gantt1")[1], "show1-background");
                }
                else if (e.target.classList.contains("navimage-grid1") || e.target.classList.contains("parent-grid1")) {
                    setActiveTab(document.getElementsByClassName("parent-grid1")[1], "show1-background");
                }
            });
        }
    });
}
window.addEventListener('resize', function () {
    console.log(window.innerWidth);
    if (window.innerWidth < 500) {
        document.getElementsByClassName('component-contain')[0].classList.remove('add-overflow');
    }
    else {
        document.getElementsByClassName('component-contain')[0].classList.add('add-overflow');
    }
    if (window.innerWidth >= 700) {
        var centeredDiv = document.querySelector('.mobile-nav-bar1');
        var storedClassName_1;
        if (centeredDiv) {
            var elements = centeredDiv.querySelectorAll('div');
            elements.forEach(function (element, index) {
                if (element.classList.contains('show1-background')) {
                    storedClassName_1 = element.classList[0];
                    element.classList.remove('show1-background');
                }
            });
            if (storedClassName_1) {
                document.getElementsByClassName(storedClassName_1)[0].classList.add("show1-background");
            }
        }
    }
    else {
        var centeredDiv = document.querySelector('.centered-div1');
        var storedClassName_2;
        if (centeredDiv) {
            var elements = centeredDiv.querySelectorAll('div');
            elements.forEach(function (element, index) {
                if (element.classList.contains('show1-background')) {
                    storedClassName_2 = element.classList[0];
                    element.classList.remove('show1-background');
                }
            });
            if (storedClassName_2) {
                document.getElementsByClassName(storedClassName_2)[1].classList.add("show1-background");
            }
        }
        // setTimeout(() => {
        //   debugger
        //   kanbanObj.refresh();
        // }, 1000);
    }
});
window.addEventListener('load', function () {
    if (window.innerWidth < 500) {
        document.getElementsByClassName('component-contain')[0].classList.remove('add-overflow');
    }
    else {
        document.getElementsByClassName('component-contain')[0].classList.add('add-overflow');
    }
    if (window.innerWidth < 380) {
        document.getElementsByClassName("parent-kanban1")[1].classList.add("show1-background");
    }
});
function bindScrollEvent() {
    var createContainer = document.querySelector('.create-container1');
    if (createContainer !== null) {
        createContainer.addEventListener('scroll', function (event) {
            if (event.currentTarget instanceof HTMLElement) {
                if (event.currentTarget.scrollTop > 110) {
                    var checkUdhaya = document.getElementsByClassName('check-udhaya')[0];
                    if (checkUdhaya instanceof HTMLElement) {
                        checkUdhaya.style.visibility = "hidden";
                    }
                }
                else {
                    var checkUdhaya = document.getElementsByClassName('check-udhaya')[0];
                    if (checkUdhaya instanceof HTMLElement) {
                        checkUdhaya.style.visibility = "";
                    }
                }
            }
        });
    }
}
window.home = function () {
    renderDataSourceDropDown();
    renderButton();
    timerangecompo();
    // renderVisalComponents();
    renderGrid();
    renderKanban();
    renderGantt();
    renderScheduler();
    // adjustKanbanHeight();
    // adjustSchedulerHeight();
    // adjustGridHeight();
    // adjustGanttHeight();
    // adjustResourceImageHeight();
    // adjustDropDownHeight();
    updateCardValue();
    bindClickEvent();
    bindTabClickEvent();
    bindEventListeners();
    bindScrollEvent();
};
function getResourceObject(resourceStr) {
    return editingResources.find(function (resource) { return resource.resourceName === resourceStr; });
}
