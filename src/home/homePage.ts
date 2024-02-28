/**
 *  Default page code.
 */

import { Tab } from '@syncfusion/ej2-navigations';
import {
  Grid, Page, Edit as GridEdit,
  Toolbar as GridToolbar,
  Filter as gridFilter,
  Sort as gridSort,
  Group 
} from '@syncfusion/ej2-grids';
import { CardRenderedEventArgs, Kanban } from '@syncfusion/ej2-kanban';
import { extend, addClass } from '@syncfusion/ej2-base';
import { Gantt, Edit, Selection, Toolbar, DayMarkers } from '@syncfusion/ej2-gantt';

import { DatePicker, DateRangePicker, DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList, DropDownTree } from '@syncfusion/ej2-dropdowns';
import {
  Schedule, Day, Week, WorkWeek, Month, Year, Agenda, TimelineViews, TimelineMonth, TimelineYear, Resize, DragAndDrop,
  ICalendarExport, ICalendarImport, Print, ExcelExport, ResourcesModel, CellClickEventArgs, Timezone
} from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';
import { NumericTextBox } from '@syncfusion/ej2-inputs';


Gantt.Inject(Edit, Selection, Toolbar, DayMarkers);
Schedule.Inject(Day, Week, WorkWeek, Month, Year, Agenda, TimelineViews, TimelineMonth, TimelineYear, DragAndDrop, Resize, ExcelExport, ICalendarExport, ICalendarImport, Print);
Grid.Inject(Page, GridEdit, GridToolbar,Group )

declare let window: any;
window.sprintData1 = 
[
  {
    Id: 1,
    Subject: 'Implement User Authentication',
    Status: 'InProgress',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-22T08:30:00.000Z',
    Priority: 'High',
    resources:"Martin Tamer",
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
let storeScheduleEditID: any;
let tabObj: Tab;
let gridObj: Grid;
let kanbanObj: Kanban;
let gantt: Gantt;
let scheduleObj: Schedule;
let isStatusChange:any;
let storeStatusValue: any
let datasourceDropDownwidth:any;
let timeRageWidth:any;
let resourceDropInstance: DropDownTree;
let dateRangeInstance: DateRangePicker;
let topDropDownInstance: DropDownList;
let resourceSelectValue:string|any;
const fields = { text: 'Game', value: 'Id' };
let editingResources = [
  { resourceId: 1, resourceName: 'Martin Tamer' },
  { resourceId: 2, resourceName: 'Rose Fuller' },
  { resourceId: 3, resourceName: 'Margaret Buchanan' },
  { resourceId: 4, resourceName: 'Fuller King' },
  { resourceId: 5, resourceName: 'Davolio Fuller' },
];
let priorityDataSource = [
  { name: 'Low', value: 'Low' },
  { name: 'Critical', value: 'Critical' },
  { name: 'Normal', value: 'Normal' },
  { name: 'High', value: 'High' },
];
function updateCommonDataAndRefreshComponents(commonData: any) {
  window.commonData = commonData;
  if (kanbanObj) {
    kanbanObj.dataSource = commonData;
  }
  if (scheduleObj) {
    scheduleObj.eventSettings.dataSource = commonData;
  }
  if (gantt) {
    gantt.dataSource = commonData;
  }
  if (gridObj) {
    gridObj.dataSource = commonData;
  }
  setTimeout(() => {
    if (kanbanObj) {
      kanbanObj.refresh();
      setTimeout(() => {
        adjustKanbanHeight();
      }, 0);
    }
    if (scheduleObj) {
      scheduleObj.refresh();
      setTimeout(() => {
        adjustSchedulerHeight();
      }, 0);
    }
    if (gantt) {
      gantt.refresh();
      setTimeout(() => {
        adjustGanttHeight();
      }, 0);
    }
    if (gridObj) {
      gridObj.refresh();
      setTimeout(() => {
        adjustGridHeight();
      }, 0);
    }
  }, 0);
  setTimeout(() => {
    updateCardValue(commonData);
  }, 300);
}
const filterAndUpdateData = (projectData: any) => {
  let filteredValue: any = projectData;
  if (resourceSelectValue) {
    filteredValue = filteredValue.filter((obj: { resources:any }) => {
      return resourceSelectValue == obj.resources
    });
  }
  if (dateRangeInstance.value !== null) {
    const givenStartDate = dateRangeInstance.startDate;
    const givenEndDate = dateRangeInstance.endDate;

    filteredValue = filteredValue.filter((obj: { StartTime: string | number | Date; EndTime: string | number | Date; }) => {
      const startDate = new Date(obj.StartTime);
      const endDate = new Date(obj.EndTime);
      const givenStartDateObj = new Date(givenStartDate);
      const givenEndDateObj = new Date(givenEndDate);

      return startDate >= givenStartDateObj && endDate <= givenEndDateObj;
    });
  }

  updateCommonDataAndRefreshComponents(filteredValue);
};
function renderDataSourceDropDown(): void {
  topDropDownInstance = new DropDownList({
    dataSource: [
      { Id: 'Project1', Game: 'Project 1' },
      { Id: 'Project2', Game: 'Project 2' },
      { Id: 'Project3', Game: 'Project 3' },
    ],
    fields: fields,
    change: function (args) {
      
      const selectedProject = args.itemData[fields.value].toString();

      switch (selectedProject) {
        case 'Project1':
          filterAndUpdateData(window.sprintData1);
          break;

        case 'Project2':
          filterAndUpdateData(window.sprintData2);
          break;

        case 'Project3':
          filterAndUpdateData(window.sprintData3);
          break;
      }
    },
    placeholder: "Select a Project",
    value: 'Project1',
    width: "200px",
    popupHeight: "220px"
  })
  topDropDownInstance.appendTo("#datasourceDropDown")
}
function idExistsInArray(id: any, array: any[]) {
   // Add the debugger statement here
  return array.some(obj => obj.Id === id);
}
function renderButton(): void {
  document.getElementById('imageWithButton')?.addEventListener('click', () => {
    

    const projectValue = topDropDownInstance.value as string;
    const projectData = window[`sprintData${projectValue.charAt(projectValue.length - 1)}`];
    
    if (!projectData || projectData.length === 0) {
      // Handle the case when projectData is not defined or is an empty array
      return;
    }

    const data = { ...projectData[0] };
    let newId = projectData.length;

    do {
      newId++;
    } while (idExistsInArray(newId, projectData));

    data.Id = newId;

    switch (parseInt(tabObj['selectingID'])) {
      case 0:
        kanbanObj.openDialog("Add",data)
      //  kanbanObj.addCard(data);
        break;
      case 1:
        scheduleObj.openEditor(data,"Add")
        var resource = { ...data.resources[0] }
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
        gridObj.editSettings.mode = "Dialog"
        gridObj.editModule.addRecord();
      //  gridObj.addRecord(data);
        break;
    }
  });
}
function resourceFilterImage(value: any): void {
  const projectValue = topDropDownInstance.value;
  const dateRangeValue = dateRangeInstance.value;
  const currentData = window[`sprintData${(projectValue as string).slice(-1)}`];
  if (value) {
    const filteredData = currentData.filter((item: { resources: any; StartTime: string | number | Date; EndTime: string | number | Date; }) => {
      const resourceMatch =
        typeof value === 'string' && value &&
        item.resources === value;
      const dateMatch =
        !dateRangeValue ||
        (new Date(item.StartTime) >= dateRangeInstance.startDate &&
          new Date(item.EndTime) <= dateRangeInstance.endDate);

      return resourceMatch && dateMatch;
    });

    updateCommonDataAndRefreshComponents(filteredData);
  } else {
    updateCommonDataAndRefreshComponents(currentData);
  }
}
function timerangecompo(): void {
  dateRangeInstance = new DateRangePicker({
    change: function (args) {
      const projectValue = topDropDownInstance.value;
      const resourceValue = resourceSelectValue;
      const currentData = window[`sprintData${(projectValue as string).slice(-1)}`];
      const isDateRangeValid = args.text !== '';
      const matchedItems = currentData.filter((item: { StartTime: string | number | Date; EndTime: string | number | Date; }) => {
        const itemStartDate = new Date(item.StartTime);
        const itemEndDate = new Date(item.EndTime);

        const dateMatch =
          !isDateRangeValid ||
          (itemStartDate >= args.startDate && itemEndDate <= args.endDate);

        return dateMatch;
      });
      if (resourceValue) {
        const resourceMatchedItems = resourceValue
          ? matchedItems.filter((item: { resources: any; }) => {
            return item.resources === resourceValue;
          })
          : matchedItems;

        updateCommonDataAndRefreshComponents(resourceMatchedItems);
      } else if (!resourceValue || resourceValue.length == 0) {
        updateCommonDataAndRefreshComponents(matchedItems);
      }
    },
    width: "200px",
    startDate: new Date(2019, 0, 1),
    endDate: new Date(2023, 0, 1),
  });
  dateRangeInstance.appendTo("#timerangecompo")
}
function renderVisalComponents(): void {
  tabObj = new Tab({
    height: "100%",
    heightAdjustMode: 'None',
    headerPlacement:'Left',
    created: function () {
      let toolbarItems = document.getElementsByClassName("e-toolbar-items")[0] as HTMLElement;
      var parentDiv = document.createElement("div");
      parentDiv.classList.add("tap")
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
      userImageParentDiv.appendChild(newDiv)
      if (userImageParentDiv) {
        userImageParentDiv.style.display = 'flex';
        userImageParentDiv.style.alignItems = 'center';
        userImageParentDiv.style.marginBottom = '5px';
      }
      toolbarItems.appendChild(userImageParentDiv);
      var newDiv2 = document.createElement("div");
      newDiv2.classList.add("topImage");
      var topImageParentDiv = document.createElement("div");
      topImageParentDiv.classList.add("topImageParentDIv")
      topImageParentDiv.style.marginTop = '8px';
      topImageParentDiv.appendChild(newDiv2)
      toolbarItems.insertBefore(topImageParentDiv, toolbarItems.firstChild);
      const tabHeaders = document.getElementsByClassName('e-tab-header') as HTMLCollectionOf<HTMLElement>;
      if (tabHeaders.length > 0) {
        tabHeaders[0].style.background = '#0D9488';
      }
      tabObj.element.classList.add('e-accent');
    },
    selected: function (args) {
      switch (args.selectedIndex) {
        case 0:
          setTimeout(() => {
            kanbanObj.refresh();
            setTimeout(() => {
              adjustKanbanHeight();
            }, 0);
          }, 100);
          break;
        case 1:
          setTimeout(() => {
            scheduleObj.refresh();
            setTimeout(() => {
              adjustSchedulerHeight();
            }, 0);
          }, 100);
          break;
        case 2:
          setTimeout(() => {
            gantt.refresh();
            setTimeout(() => {
              adjustGanttHeight();
            }, 0);
          }, 300);
          break;
        case 3:
          setTimeout(() => {
            gridObj.refresh();
            setTimeout(() => {
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
        header: { 'iconCss': 'e-event-scheduler'  },
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
function resourceValueAccessor(field: any, data: any): any {
  if (data && data.resources && data.resources.length > 0) {
    const resourceName = data.resources;
    return resourceName;
  }
  return '';
}
function enddateValueAccessor(field: any, data: any): any {
  if (data && data.EndTime) {
    const originalDateString = data.EndTime
    const originalDate = new Date(originalDateString);
    const day = originalDate.getUTCDate();
    const month = originalDate.getUTCMonth() + 1;
    const year = originalDate.getUTCFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDateString = `${formattedDay}.${formattedMonth}.${year}`;
    return formattedDateString
  }
  return '';
}
function startdateValueAccessor(field: any, data: any): any {
  if (data && data.StartTime) {
    const originalDateString = data.StartTime
    const originalDate = new Date(originalDateString);
    const day = originalDate.getUTCDate();
    const month = originalDate.getUTCMonth() + 1;
    const year = originalDate.getUTCFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDateString = `${formattedDay}.${formattedMonth}.${year}`;
    return formattedDateString
  }
  return '';
}
function renderGrid(): void {
  let elem: any;
  let elem3: any;
  let h4Elem:any
  let dropdownlistObj: any;
  let dropdownlistObj3: any;
  let progressValue: any;
  let status: any;
  let resource: any;
  let resourceObj: any;
  gridObj = new Grid({
    dataSource: window.commonData,
    allowGrouping: true,
    groupSettings: { showDropArea: false,captionTemplate: '#captiontemplate', columns: ['resources'] },
    columns: [
      { field: 'Id', allowEditing: true },
      { field: 'Subject', width: '350px' },
      { field: 'StartTime', editType: 'datetimepickeredit',valueAccessor:startdateValueAccessor},
      { field: 'EndTime', editType: 'datetimepickeredit',valueAccessor:enddateValueAccessor },
      { field: 'Progress', editType: 'numericedit' },
      {
        field: 'Status',
        edit: {
          create: () => {
            elem = document.createElement('input');
            return elem;
          },
          read: () => {
            return dropdownlistObj.value;
          },
          destroy: () => {
            dropdownlistObj.destroy();
          },
          write: (args: any) => {
            dropdownlistObj = new DropDownList({
              dataSource: [
                { Status: 'Open' },
                { Status: 'Testing' },
                { Status: 'InProgress' },
                { Status: 'Close' },
              ],
              fields: { value: 'Status' },
              placeholder:"Status",
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
          create: () => {
            elem3 = document.createElement('input');
            return elem3;
          },
          read: () => {
            return dropdownlistObj3.value;
          },
          destroy: () => {
            dropdownlistObj3.destroy();
          },
          write: (args: any) => {
            dropdownlistObj3 = new DropDownList({
              dataSource: [
                { Priority: 'Low' },
                { Priority: 'Normal' },
                { Priority: 'Critical' },
                { Priority: 'High' },
              ],
              fields: { value: 'Priority' },
              placeholder:"Priority",
              value: args.rowData[args.column.field],
              floatLabelType: 'Auto',
            });
            dropdownlistObj3.appendTo(elem3);
          },
        },
      },
      {
        field: 'resources',headerText:'Resources', validationRules: { required: true },
        valueAccessor: resourceValueAccessor, template: '#columnTemplateGrid',  enableGroupByFormat: true,
        edit: {
          create: () => {
            elem1 = document.createElement('input');
            return elem1;
          },
          read: () => {
            const selectedValue = dropdownlistObj1.value;
            const matchingResource = editingResources.find(
              (resource) => resource.resourceId === selectedValue
            );

            if (matchingResource) {
              return [matchingResource]; // Return the matching object as an array
            }

            return null; // Return null if no matching object is found
          },
          destroy: () => {
            dropdownlistObj1.destroy();
          },
          write: (args: any) => {
            let valueToSet = args.rowData && args.rowData[args.column.field] ? args.rowData[args.column.field] : null;
            editingResources.forEach(obj => {
              // Check if the name property of the object matches the value to compare
              if (obj.resourceName === valueToSet) {
                valueToSet = obj.resourceId
                return
              }
            });
            dropdownlistObj1 = new DropDownList({
              dataSource: editingResources,
              fields: { text: 'resourceName', value: 'resourceId' },
              value: valueToSet,
              placeholder:"Resource",
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
        if (args.data.resources.length) {
          args.data.resources = args.data.resources[0].resourceName
        }
        if (!args.data.Id) {
          if (Array.isArray(gridObj.dataSource)) {
            args.data.Id = gridObj.dataSource.length + 1
          }
        }
        if (!args.data.resources) {
          args.data.resources = resourceObj;
        }
        if (args.data.Progress === 100) {
          args.data.Status = 'Close';
        }
        if (args.data.Progress < 100 && args.data.Status == "Close") {
          args.data.Progress = 100
        }
        if (args.data.Progress != 0 && args.data.Status == "Open")  {
          args.data.Status = 'InProgress';
        }
        if (args.data.Progress == 0 && args.data.Status != "Open")  {
          args.data.Status = 'Open';
        }
        updateDataSourceObject(
          gridObj.dataSource,
          args.data.Id,
          args.data
        );
        window.commonData = gridObj.dataSource;
        setTimeout(function() {
          gridObj.refresh();
        }, 100);
      }
    },
    dataBound:function (args) {
      updateCardValue(gridObj.dataSource)
    },
    actionComplete:function (args) {
      if (args.requestType != 'refresh') {
     //   updateCardValue()
      }
    },
    toolbarClick:function (args) {
      
      
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      newRowPosition: 'Top',
      mode: 'Dialog'
    },
  //  rowHeight:30,
    height :"500px"
  });
  gridObj.appendTo('#Grid');

}


interface TemplateFunction extends Window {
  getTags?: Function;
  getString?: Function;
  getBoolean?: Function;
  getResourceName?: Function;
  getGanttResourceImage?: Function;
  getGridResourceImage?:Function;
}

// Kanban
let isDataChanged: any;
function renderKanban(): void {
  let progressValue: any;
  let status: any;
  let data: Object[] = window.commonData;
  kanbanObj = new Kanban({ //Initialize Kanban control
    cssClass: "kanban-overview",
    dataSource: data,
    keyField: 'Status',
    enableTooltip: true,
    swimlaneSettings: {
      keyField: 'resources'
    },
    dialogClose: function (args) {
      if (args.requestType === 'Edit' && args.name === 'dialogClose') {
        const newProgress = parseInt(args.data.Progress);
        if (newProgress !== progressValue) {
          if (newProgress === 100) {
            args.data.Status = 'Close';
          }
        }
        if (args.data.Progress != 0 && args.data.Status == "Open")  {
          args.data.Status = 'InProgress';
        }
        if (args.data.Progress == 0 && args.data.Status != "Open")  {
          args.data.Status = 'Open';
        }
        if (args.data.Status != storeStatusValue) {
          isStatusChange = true;
        }
        if (status !== newProgress && newProgress < 100 && args.data.Status === 'Close') {
          args.data.Progress = 100;
        }
        const targetId = args.data.resources;
        const matchingResource = editingResources.find(resource => resource.resourceId === targetId);
        if (matchingResource) {
          args.data.resources = matchingResource.resourceName;
        }
        isDataChanged = true;
      }
      if (args.requestType === 'Add') {
        const targetId = args.data.resources;
        const matchingResource = editingResources.find(resource => resource.resourceId === targetId);
        if (matchingResource) {
          args.data.resources = matchingResource.resourceName;
        }
      }
    },
    dialogOpen: function (args) {
      const fields = args.element.querySelectorAll('.e-field');
      const isCorrectFields = (
        fields[4]?.getAttribute('name') === 'StartTime' &&
        fields[5]?.getAttribute('name') === 'EndTime' &&
        fields[6]?.getAttribute('name') === 'resources' && 
        fields[7]?.getAttribute('name') === 'Priority'
      );
      if (args.data) {
        if (args.data.Status){
          if (args.requestType === 'Edit') {
            storeStatusValue = args.data.Status
          } else if (args.requestType === 'Add') {
            isStatusChange = true
          }
        }
      }
      if ((args.requestType === 'Add' || args.requestType === 'Edit') && isCorrectFields) {
        const dateTimeInstance = new DateTimePicker({
          placeholder: "Select a date and time",
          value: args.requestType === 'Edit' ? args.data.StartTime : null
        });
        dateTimeInstance.appendTo(fields[4] as HTMLInputElement);
        const dateTimeInstance1 = new DateTimePicker({
          placeholder: "Select a date and time",
          value: args.requestType === 'Edit' ? args.data.EndTime : null
        });
        dateTimeInstance1.appendTo(fields[5] as HTMLInputElement);
        let resourceObject:any= getResourceObject(args.data.resources)
        const dropDownList = new DropDownList({
          dataSource: editingResources,
          fields: { text: 'resourceName', value: 'resourceId' },
          value: args.requestType === 'Edit' ? resourceObject.resourceId : null
        });
        dropDownList.appendTo(fields[6] as HTMLInputElement);
        const dropDownList1 = new DropDownList({
          dataSource: priorityDataSource,
          fields: { text: 'name', value: 'value' },
          value: args.requestType === 'Edit' ? args.data.Priority : null
        });
        dropDownList1.appendTo(fields[7] as HTMLInputElement);
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
          args.changedRecords[0].Progress = 100
        }
        isDataChanged = true;
        if (storeStatusValue !=args.changedRecords[0].Status) {
          isStatusChange = true;
        }
      }
    },
    cardSettings: {
      headerField: 'Id',
      template: "#cardTemplate"
    },
    actionComplete:function(args) {
    },
    dataBound: function (args) {
      if (isDataChanged) {
        const updatedData = kanbanObj.dataSource;
        window.commonData = updatedData;
        isDataChanged = false;
        if (isStatusChange) {
          updateCardValue(kanbanObj.dataSource)
          isStatusChange = false
        }
      }
      if (args.requestType == "cardCreated") {
        if (isStatusChange) {
          updateCardValue(kanbanObj.dataSource)
          isStatusChange = false
        }
      }
    },
    dialogSettings: {
      fields: [
        { key: 'Id', text: 'ID', type: 'TextBox' },
        { key: 'Subject', text: 'Subject', type: 'TextArea' },
        { key: 'Status', text: 'Status', type: 'DropDown' },
        { key: 'Progress', text: 'Progress', type: 'Numeric' },
        { key: 'StartTime', text: 'StartTime' },
        { key: 'EndTime', text: 'EndTime' },
        { key: 'resources', text: 'Resources',validationRules:{ required: true}},
        { key: 'Priority', text: 'Priority'}
      ],
    },
    cardRendered: (args: CardRenderedEventArgs) => {
      const priority = args.data?.Priority;
      if (priority) {
        let val: string = (<{ [key: string]: Object }>(args.data)).Priority as string;
        addClass([args.element], val);
      }
    },
    columns: [
      { headerText: 'To Do', keyField: 'Open', template: '#headerTemplate' },
      { headerText: 'In Progress', keyField: 'InProgress', template: '#headerTemplate' },
      { headerText: 'Testing', keyField: 'Testing', template: '#headerTemplate' },
      { headerText: 'Done', keyField: 'Close', template: '#headerTemplate' }
    ],
  });
  kanbanObj.appendTo('#Kanban');
}
(window as TemplateFunction).getTags = (data: string) => {
  
  let tagDiv: string = '';
  if (data) {
    let tags: string[] = data.split(',');
    for (let tag of tags) {
      tagDiv += '<div class="e-card-tag-field e-tooltip-text">' + tag + '</div>';
    }
  }
  return tagDiv;
};

(window as any).getBoolean = (data: any) => {
  
  let tempDiv: string = ''
  let progressWidth: any = data.Progress + "%"
  if (data.Status != 'Open' && data.Status != 'Close') {
    tempDiv += '<div className="e-progress-bar" style="padding-left: 12px;"><div className="e-progress-bar-container"><div className="e-progress-bar-background" style="width: 100%;"><div className="e-progress-bar-progress" style="width:' + progressWidth + '; background: rgba(173, 216, 230); height: 5px;"></div><div className="e-progress-bar-text" >' + progressWidth + '</div></div></div></div>'
  }
  return tempDiv
};
(window as any).getResourceName = (data: any) => {
  if (data.resources) {
    let tempDiv: string = ''
    tempDiv += '<div class="e-card-header-title e-tooltip-text">' + data.resources + '</div>'
    return tempDiv
  }
};
(window as any).getKanbanResorurceImage = (data: any) => {
  if (data.resources) {
    let tempDiv: string = ''
    let resourceName:any = data.resources
    tempDiv += '<img className="e-card-avatar" style="width: 30px;height: 30px;text-align: center;background: gainsboro;color: #6b6b6b;border-radius: 50%;position: absolute;right: 12px;bottom: 10px;font-size: 12px;font-weight: 400;" src="//ej2.syncfusion.com/demos/src/gantt/images/'+resourceName+'.png"/>'
    return tempDiv
  }
};

(window as any).getGanttResourceImage = (data: any) => {
  let tempDiv: string = ''
  let resourceName: any = data.resources;
  if (data.resources) {
    tempDiv += '<div class="image"><img src="//ej2.syncfusion.com/demos/src/gantt/images/' + resourceName + '.png" style="height:40px;width:40px;margin-right:8px;" /><div style="display:inline-block;width:100%;position:relative;}">' + resourceName + '</div></div>'
  }
  return tempDiv
};
(window as any).getGridResourceImage = (data: any) => {
  
  let tempDiv: string = ''
  let resourceName: any = data.resources[0];
  if (data.resources) {
    tempDiv += '<div class="image"><img src="//ej2.syncfusion.com/demos/src/gantt/images/' + resourceName.resourceName + '.png" style="height:40px;width:40px;margin-right:8px;" /><div style="display:inline-block;width:100%;position:relative;}">' + resourceName.resourceName + '</div></div>'
  }
  return tempDiv
};




// Gantt
let elem: any;
let elem3: any;
let dropdownlistObj: any;
let dropdownlistObj3: any;
let elem1: any;
let dropdownlistObj1: any;
const updateDataSourceObject = (dataSource: any, id: any, updateData: any) => {
  const targetObject = dataSource.find((obj: { Id: any; }) => obj.Id === id);
  if (targetObject) {
    // Update the object with the provided data
    for (const key in updateData) {
      targetObject[key] = updateData[key];
    }
  }
};
function calculateDiff(): number {
  const element1: DOMRect = (document.getElementsByClassName("topImage")[0] as HTMLElement).getBoundingClientRect();
  const element2: DOMRect = (document.getElementsByClassName("userImage")[0] as HTMLElement).getBoundingClientRect();

  // Calculate the vertical distance between the elements
  const verticalDistance: number = Math.abs(element2.top - element1.top);
  return verticalDistance;
}
function adjustGanttHeight() {
  const viewportHeight = window.innerHeight;
  const ganttHeight = 0.5 * viewportHeight;
  const ganttBottom = gantt.element.getBoundingClientRect().bottom;
  if (ganttBottom > viewportHeight) {
      gantt.element.style.height = viewportHeight - gantt.element.offsetTop -300+ 'px';
  } else {
      gantt.element.style.height = ganttHeight + 'px';
  }
  gantt.element.style.overflow = "scroll";
  const paddingBottom = 0.17 * viewportHeight;
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
  const viewportHeight = window.innerHeight;
  const kanbanHeight = 0.45 * viewportHeight;
  const kanbanBottom = kanbanObj.element.getBoundingClientRect().bottom;
  if (kanbanBottom > viewportHeight) {
      kanbanObj.element.style.height = viewportHeight - kanbanObj.element.offsetTop -290+ 'px';
  } else {
      kanbanObj.element.style.height = kanbanHeight + 'px';
  }
  kanbanObj.element.style.overflow = "scroll";
}
function adjustSchedulerHeight() {
  const viewportHeight = window.innerHeight;
  const SchedulerHeight = 0.45 * viewportHeight;
  const SchedulerBottom = scheduleObj.element.getBoundingClientRect().bottom;
  if (SchedulerBottom > viewportHeight) {
      scheduleObj.element.style.height = viewportHeight - scheduleObj.element.offsetTop -290 + 'px';
  } else {
      scheduleObj.element.style.height = SchedulerHeight + 'px';
  }
  scheduleObj.element.style.overflow = "scroll";
}
function adjustGridHeight() {
  const viewportHeight = window.innerHeight;
  const gridHeight = 0.5 * viewportHeight;
  const gridBottom = gridObj.element.getBoundingClientRect().bottom;
  if (gridBottom > viewportHeight) {
    gridObj.element.style.height = viewportHeight - gridObj.element.offsetTop -290+ 'px';
  } else {
    gridObj.element.style.height = gridHeight + 'px';
  }
  gridObj.element.style.overflow = "scroll";
}
function adjustResourceImageHeight() {
  debugger
  const viewportWidth = window.innerWidth;
  const targetImageSize = 37;
  const targetLeftValue = 30
  const imageLeftPercentage = 2;
  const sizePercentage = 3.5;
  const imageSize = viewportWidth * (sizePercentage / 100);
  let imageLeft = viewportWidth * (imageLeftPercentage / 100);
  const newSize = Math.min(imageSize, targetImageSize);
  let newLeftSize = Math.min(imageLeft, targetLeftValue);
  const imageContainer = document.querySelector('.image-container');
  if (imageContainer) {
    const images = imageContainer.querySelectorAll('img');
    let leftValue = 0;
    images.forEach((img, index) => {
      img.style.width = newSize + 'px';
      img.style.height = newSize + 'px';
      if (index !== 0) {
        if (window.innerWidth > 1500) {
          leftValue += (newLeftSize+(newLeftSize * 0.25));
        } else {
          leftValue += (newLeftSize+(newLeftSize * 0.3));
        }
      }
      img.style.left = (newLeftSize + leftValue) + 'px';
    });
  }
}

function adjustDropDownHeight() {
  const viewportWidth = window.innerWidth;
  const sizePercentage = 16;
  const elementSize = viewportWidth * (sizePercentage / 100);
  const newSize = Math.min(elementSize, 200);
  timeRageWidth = newSize
  const elementContainers = document.querySelectorAll('.datasourceDropDownParent, .timerangecompoParent');
  elementContainers.forEach(elementContainer => {
    const firstElement = elementContainer.querySelector('span');
    if (firstElement) {
      firstElement.style.width = newSize + 'px';
    }
  });
  adjustDropDownLeft();
}
function adjustDropDownLeft(): void {
  const element = document.querySelector('.e-tab-header.e-vertical.e-vertical-left.e-control.e-toolbar.e-lib.e-keyboard') as HTMLElement;
  const contentPadding: HTMLElement | null = document.querySelector('.e-item.e-active');
  if (element && contentPadding) {
    const width =  parseInt(window.getComputedStyle(element).width);
    const styles = window.getComputedStyle(contentPadding);
    const paddingLeft: number = parseFloat(styles.paddingLeft);
    const dataSourceContainers = document.querySelectorAll('.datasourceDropDownParent');
    dataSourceContainers.forEach(element => {
      const elementContainer = element as HTMLElement;
      elementContainer.style.left = (width +paddingLeft)  + 'px';
    });
    if (contentPadding instanceof HTMLElement) {
      const styles = window.getComputedStyle(contentPadding);
      const paddingRight: number = parseFloat(styles.paddingRight);
      const width: number = contentPadding.offsetWidth;
      const tabWidth:number = parseInt(window.getComputedStyle(element).width);
      const timeRangeContainers = document.querySelectorAll('.timerangecompoParent');
      timeRangeContainers.forEach(element => {
        const elementContainer = element as HTMLElement;
        let widthWithPaddingBorderScrollbar: number = elementContainer.offsetWidth;
        const spanElement = elementContainer.querySelector('span');
        if (spanElement) {
          widthWithPaddingBorderScrollbar = spanElement.offsetWidth;
        }
        elementContainer.style.left =(tabWidth+width - widthWithPaddingBorderScrollbar -paddingRight -paddingRight)  + 'px';
        const imageContainer = document.querySelector('.image-container') as HTMLElement;
        if (imageContainer) {
          imageContainer.style.left = parseInt(elementContainer.style.left) - widthWithPaddingBorderScrollbar + 'px'
        }
      })
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
function renderGantt(): void {
  let progressValue: any;
  let status: any;
  gantt = new Gantt(
    {
      dataSource: window.commonData,
      treeColumnIndex: 1,
      viewType:"ResourceView",
      collapseAllParentTasks:false,
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
        { field: 'Progress' },
        {
          field: 'Status',
          edit: {
            create: () => {
              elem = document.createElement('input');
              return elem;
            },
            read: () => {
              return dropdownlistObj.value;
            },
            destroy: () => {
              dropdownlistObj.destroy();
            },
            write: (args: any) => {
              dropdownlistObj = new DropDownList({
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
            create: () => {
              elem3 = document.createElement('input');
              return elem3;
            },
            read: () => {
              return dropdownlistObj3.value;
            },
            destroy: () => {
              dropdownlistObj3.destroy();
            },
            write: (args: any) => {
              dropdownlistObj3 = new DropDownList({
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
      created:function(args) {
      },
      dataBound:function(args) {
        updateCardValue(gantt.dataSource)
      },
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        mode: 'Dialog',
      },
      queryTaskbarInfo: function (args: any) {
        if (args.data.taskData.Status == 'InProgress') {
          args.progressBarBgColor = 'rgba(201, 167, 244, 1)';
          args.taskbarBgColor = 'rgba(201, 167, 244, 0.4)';
          args.taskbarBorderColor = 'rgba(201, 167, 244, 1)';
        } else if (args.data.taskData.Status == 'Open') {
          args.progressBarBgColor = 'rgba(194, 220, 240, 1)';
          args.taskbarBgColor = 'rgba(194, 220, 240, 0.4)';
          args.taskbarBorderColor = 'rgba(194, 220, 240, 1)';
        } else if (args.data.taskData.Status == 'Close') {
          args.progressBarBgColor = 'rgba(182, 214, 171, 1)';
        } else if (args.data.taskData.Status == 'Testing') {
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
      labelSettings: {
        rightLabel: 'resources',
        taskLabel: '${Progress}%',
      },
      actionBegin: function (args) {
        if (args.type == 'edit' || args.requestType == 'beforeOpenEditDialog') {
          progressValue = args.rowData.Progress;
          status = args.rowData.Status;
        }
        if (args.requestType == 'beforeSave') {
          if (progressValue != args.data.Progress) {
            if (args.data.Progress == 100) {
              args.data.Status = 'Close';
              args.data.taskData.Status = 'Close';
            }
          }
          if (args.data.Progress != 0 && args.data.Status == "Open")  {
            args.data.Status = 'InProgress';
            args.data.taskData.Status = 'InProgress';
          }
          if (args.data.Progress == 0 && args.data.Status != "Open")  {
            args.data.Status = 'Open';
            args.data.taskData.Status = 'Open';
          }
          if (status != args.data.Status) {
            if (args.data.Progress < 100 && args.data.Status == "Close") {
              args.data.Progress = 100;
              args.data.taskData.Progress = 100;
              args.data.ganttProperties.progress = 100;
              updateDataSourceObject(
                gantt.dataSource,
                args.data.Id,
                { Progress: args.data.Progress, Status: args.data.Status }
              );
              window.commonData = gantt.dataSource;
            }
          }
        }
        if (
          args.requestType == 'beforeOpenEditDialog' ||
          args.requestType == 'beforeOpenAddDialog'
        ) {
          args.Resources.columns.splice(0, 1);
        }
      },
      actionComplete: function (args) {
        if (
          args.requestType == 'openEditDialog' ||
          args.requestType == 'openAddDialog'
        ) {
          var resources = args.data.ganttProperties.resourceInfo;
          let tabObj: any = (document.getElementById('Gantt_Tab') as any)['ej2_instances'][0];
          tabObj.selected = function (args: any) {
            if (args.selectedIndex == 2) {
              let gridObj: any = (document.getElementById('GanttResourcesTabContainer_gridcontrol') as any)['ej2_instances'][0];
              gridObj.selectionSettings = {
                checkboxOnly: false,

                type: 'Single',

                persistSelection: false,
              };
              var currentViewData = gridObj.getCurrentViewRecords();
              let indexs: any = [];
              if (resources && resources.length > 0) {
                currentViewData.forEach(function (data: any, index: any) {
                  for (var i = 0; i < resources.length; i++) {
                    if (
                      data.taskData['resourceId'] ===
                      resources[i]['resourceId'] &&
                      gridObj.selectionModule &&
                      gridObj.getSelectedRowIndexes().indexOf(index) === -1
                    ) {
                      indexs.push(index);
                    }
                  }
                  gridObj.selectRows(indexs);
                });
              }
            }
          };
        }
        if (args.requestType == "save" ||args.requestType == "add"||args.requestType == "delete") {
          //updateCardValue()
        }
      },
      rowHeight: 60,
    });
  gantt.appendTo('#Gantt');
  
}
//resize event
window.addEventListener("resize", adjustGanttHeight);
window.addEventListener('resize', adjustKanbanHeight);
window.addEventListener('resize', adjustSchedulerHeight);
window.addEventListener('resize', adjustGridHeight);
window.addEventListener('resize', adjustDropDownHeight);
window.addEventListener('resize', adjustResourceImageHeight);

//
// Scheduler 
const applyCategoryColor = (args: any, currentView: any) => {

  if (!args.element) {
    return;
  }

  if (args.data.Status == 'Close') {
    args.element.style.backgroundColor = 'rgba(182, 214, 171, 1)';
  } else if (args.data.Status == 'Open') {
    args.element.style.backgroundColor = 'rgba(194, 220, 240, 1)';
  } else if (args.data.Status == 'InProgress') {
    args.element.style.backgroundColor = 'rgba(201, 167, 244, 1)';
    args.element.style.border = 'rgba(160, 133, 195, 1)';
  } else if (args.data.Status == 'Testing') {
    args.element.style.backgroundColor = 'rgba(244, 218, 168, 1)';
  }

};
function renderScheduler(): void {
  let progressValue: any;
  let status: any;
  let dropDownList: any;
  scheduleObj = new Schedule({
    //height: '650px',
    selectedDate: new Date(2021, 0, 14),
    eventSettings: { dataSource: window.commonData },
    popupOpen: function (args) {  
      if (args.type === 'Editor') {
        storeScheduleEditID = args.data.Id
        progressValue = args.data.Progress;
        status = args.data.Status
        // Create required custom elements in initial time
        let formElement = args.element.querySelector('.e-schedule-form');
        if (formElement && !formElement.querySelector('.custom-field-row')) {
          let row = document.createElement('div');
          row.className = 'custom-field-row';

          // Create a label for the input element
          let label = document.createElement('label');
          label.textContent = 'Status';

          // Remove font-weight styles from the label
          label.style.fontWeight = 'normal'; // Or 'unset'

          let container = document.createElement('div');
          container.className = 'custom-field-container';

          let inputEle = document.createElement('input');
          inputEle.className = 'e-field';
          inputEle.name = 'Status';

          container.appendChild(inputEle);
          row.appendChild(label); // Append the label
          row.appendChild(container);

          formElement.insertBefore(row, formElement.firstChild);

          let dropDownList = new DropDownList({
            dataSource: [
              { text: 'Open', value: 'Open' },
              { text: 'Testing', value: 'Testing' },
              { text: 'InProgress', value: 'InProgress' },
              { text: 'Close', value: 'Close' },
            ],
            fields: { text: 'text', value: 'value' },
            value: args.data.Status,
          });

          dropDownList.appendTo(inputEle);
        }
        if (formElement && !formElement.querySelector('.custom-field-row-priority')) {
          let row = document.createElement('div');
          row.className = 'custom-field-row-priority';

          // Create a label for the input element
          let label = document.createElement('label');
          label.textContent = 'Priority';

          // Remove font-weight styles from the label
          label.style.fontWeight = 'normal'; // Or 'unset'

          let container = document.createElement('div');
          container.className = 'custom-field-priority';

          let inputEle = document.createElement('input');
          inputEle.className = 'e-field';
          inputEle.name = 'Priority';

          container.appendChild(inputEle);
          row.appendChild(label); // Append the label
          row.appendChild(container);

          formElement.insertBefore(row, formElement.firstChild);

          let dropDownList = new DropDownList({
            dataSource: [
              { text: 'Low', value: 'Low' },
              { text: 'Normal', value: 'Normal' },
              { text: 'Critical', value: 'Critical' },
              { text: 'High', value: 'High' },
            ],
            fields: { text: 'text', value: 'value' },
            value: args.data.Priority,
          });

          dropDownList.appendTo(inputEle);
        }
        // if (formElement && !formElement.querySelector('.custom-field-row-resource')) {
        //   let row = document.createElement('div');
        //   row.className = 'custom-field-row-resource';

        //   // Create a label for the input element
        //   let label = document.createElement('label');
        //   label.textContent = 'resources';

        //   // Remove font-weight styles from the label
        //   label.style.fontWeight = 'normal'; // Or 'unset'

        //   let container = document.createElement('div');
        //   container.className = 'custom-field-resources';

        //   let inputEle = document.createElement('input');
        //   inputEle.className = 'e-field';
        //   inputEle.name = 'resources';

        //   container.appendChild(inputEle);
        //   row.appendChild(label); // Append the label
        //   row.appendChild(container);

        //   formElement.insertBefore(row, formElement.firstChild);
        //   let resourceObject:any = getResourceObject(args.data.resources)
        //   const valueToSet = args.data.resources? resourceObject.resourceId : null;
        //   dropDownList = new DropDownList({
        //     dataSource: editingResources,
        //     fields: { text: 'resourceName', value: 'resourceId' },
        //     value: valueToSet,
        //   });
        //   dropDownList.appendTo(inputEle);
        // } else {
        //   let resourceObject:any = getResourceObject(args.data.resources)
        //   const valueToSet = args.data.resources ? resourceObject.resourceId : null;
        //   dropDownList.value = valueToSet
        // }
        if (
          formElement &&
          !formElement.querySelector('.custom-field-row-progress')
        ) {
          let row = document.createElement('div');
          row.className = 'custom-field-row-progress';
          row.style.paddingBottom = '10px';

          // Create a label for the header text
          let headerLabel = document.createElement('label');
          headerLabel.textContent = 'Progress';

          // Remove font-weight styles from the label
          headerLabel.style.fontWeight = 'normal'; // Or 'unset'

          let container = document.createElement('div');
          container.className = 'custom-field-progress';

          let inputEle = document.createElement('input');
          inputEle.className = 'e-field';
          inputEle.name = 'Progress';

          // Set the type to "number" to create a numeric input
          inputEle.type = 'number';
          inputEle.style.width = '100%';

          // Set the default value
          inputEle.value = args.data.Progress;

          container.appendChild(inputEle);
          row.appendChild(headerLabel); // Append the header text
          row.appendChild(container);

          formElement.insertBefore(row, formElement.firstChild);
        }
      }
    },
    currentView: 'Month',
    eventRendered: function (args) {
      applyCategoryColor(args, scheduleObj.currentView);
    },
    actionBegin: function (args) {
      if (args.requestType == 'eventCreate') {
        
        if (args.data[0].resources) {
          const foundObject:any = editingResources.find(obj => obj.resourceName === args.data[0].resources);
          args.data[0].resources = foundObject.resourceName
        }
      }
      if (args.requestType == 'eventChange') {
        if (args.data.resources) {
          const foundObject:any = editingResources.find(obj => obj.resourceName === args.data.resources);
          args.data.resources = foundObject.resourceName
        }
        if (progressValue != parseInt(args.data.Progress)) {
          if (args.data.Progress == 100) {
            args.data.Status = 'Close';
          }
        }
        if (status != args.data.Status) {
          if (args.data.Progress < 100 && args.data.Status == "Close") {
            args.data.Progress = 100
          }
        }
        if (args.data.Progress != 0 && args.data.Status == "Open")  {
          args.data.Status = 'InProgress';
        }
        if (args.data.Progress == 0 && args.data.Status != "Open")  {
          args.data.Status = 'Open';
        }
        if (Array.isArray(scheduleObj.eventSettings.dataSource)) {
          const dataSource = scheduleObj.eventSettings.dataSource;
          const idToMatch = storeScheduleEditID;
          dataSource.forEach(item => {
            if (item.Id === idToMatch) {
              item = args.data;
              item.Id = idToMatch;
              return
            }
          });
        }
      }
    },
    actionComplete: function (args) {
      if (args.requestType != 'toolBarItemRendered') {
        setTimeout(() => {
          scheduleObj.refresh();
        }, 0);
      }
    },
    dataBound:function (args) {
      updateCardValue(scheduleObj.eventSettings.dataSource)
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
  scheduleObj.appendTo("#Scheduler")
}
function updateCardValue(passedData?:any): void {
  const projectValue = topDropDownInstance.value;
  const dateRangeValue = dateRangeInstance.value;
  const currentData = passedData?passedData: window[`sprintData${(projectValue as string).slice(-1)}`];

  // Define type for counts
  type Counts = { InProgress: number; Testing: number; Open: number; Close: number };

  const counts: Counts = {
    InProgress: 0,
    Testing: 0,
    Open: 0,
    Close: 0,
  };

  currentData.forEach((item: { Status: keyof Counts }) => {
    counts[item.Status]++;
  });

  updateCardElement('.card1', counts.Open);
  updateCardElement('.card2', counts.InProgress);
  updateCardElement('.card3', counts.Testing);
  updateCardElement('.card4', counts.Close);
}
function updateCardElement(selector: string, count: number): void {
  const cardElement = document.querySelector(selector);
  const countTodoElement = cardElement?.querySelector('.counttodo');
  if (countTodoElement) {
    countTodoElement.innerHTML = count.toString();
  }
}
function bindClickEvent(): void {
  const imageContainer: HTMLElement | null = document.getElementsByClassName('image-container')[0] as HTMLElement;
  if (imageContainer) {
    const circularImages: NodeListOf<HTMLElement> = imageContainer.querySelectorAll('.circular-image');
    circularImages.forEach((image: HTMLElement) => {
      image.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLImageElement;
        if (target.tagName === 'IMG') {
          let altText:any = target.alt;
          if (altText) {
            if (resourceSelectValue == altText) {
              altText = null
            }
            resourceSelectValue = altText
            resourceFilterImage(altText);
            if (target.classList.contains('selected-image')) {
              target.classList.remove('selected-image');
            } else {
              circularImages.forEach(img => {
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
// window.addEventListener('load', function() {
//   var container = document.getElementById('imageContainer');

//   if (container) {
//       var images = container.getElementsByClassName('circular-image');
//       var totalWidth = 0;

//       for (var i = 0; i < images.length; i++) {
//           var image = images[i] as HTMLElement; // Typecast to HTMLElement
//           totalWidth += image.offsetWidth; // Access offsetWidth property
//       }

//       container.style.width = totalWidth + 'px'; // Set the width of container
//   }
// });
// window.addEventListener('load', function () {
//   debugger
//   var container = document.querySelector('.image-container') as HTMLElement;
//   if (container) {
//     var images = container.getElementsByClassName('circular-image');
//     var totalWidth = 0;
//     for (var i = 0; i < images.length; i++) {
//       var image = images[i] as HTMLElement;
//       totalWidth += image.offsetWidth;
//     }
//     container.style.width = totalWidth + 'px';
//   }
// });
window.home = () => {
  renderDataSourceDropDown();
  renderButton();
  timerangecompo();
  renderVisalComponents();
  renderGrid();
  renderKanban();
  renderGantt();
  renderScheduler();
  adjustKanbanHeight();
  adjustSchedulerHeight();
  adjustGridHeight();
  adjustGanttHeight();
  adjustResourceImageHeight();
  adjustDropDownHeight();
  updateCardValue();
  bindClickEvent();
};

function getResourceObject(resourceStr:any) {
  return editingResources.find(resource => resource.resourceName === resourceStr);
}
