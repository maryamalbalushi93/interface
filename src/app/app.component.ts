import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: boolean = false;
  dialogService: any;
  product: never[] = [];
  selectedRowVersionNumber: any; // Type should match your version number type
  modalCode: string = '';
  modalName: string = '';
  stNo: number | undefined;
  editDisplay:boolean=false;
  
 
  title = 'task10';
  items: any[] = [
    { label: 'Support Registan', icon: 'pi pi-fw pi-home' },
    { label: '', icon: 'pi pi-bars' },
    // Add more menu items as needed
  ];

  userMenuOptions: SelectItem[] = [
    { label: 'Profile', value: 'profile', icon: 'pi pi-user' },
    { label: 'Settings', value: 'settings' },
    { label: 'Logout', value: 'logout' }
  ];
  selectedUserOption: any;
  menus1 = [
    {
      label: 'Administration',
      items: [
        { label: 'Master Data' },
        { label: 'Client' },
        { label: 'User Registration' },
        { label: 'User List' },
        { label: 'Product' , command: () => this.showDialog() },
        { label: 'Client Products' },
        { label: 'Release Note' },
        { label: 'System Settings' }
      ]
    },
    {
      label: 'Client Produts',
      items: [
        { label: 'Item 2.1' },
        { label: 'Item 2.2' },
        { label: 'Item 2.3' }
      ]
    },
    {
      label: 'Service',
      items: [
        { label: 'Item 2.1' },
        { label: 'Item 2.2' },
        { label: 'Item 2.3' }
      ]
    },
    {
      label: 'QA',
      items: [
        { label: 'Item 2.1' },
        { label: 'Item 2.2' },
        { label: 'Item 2.3' }
      ]
    },
    {
      label: 'Reporta',
      items: [
        { label: 'Item 2.1' },
        { label: 'Item 2.2' },
        { label: 'Item 2.3' }
      ]
    }
  ];
  table1Data = [
    { 'st.No': 1, 'product code': 'P001', 'product name': 'Product 1', 'current version': '1.0' },
    { 'st.No': 2, 'product code': 'P002', 'product name': 'Product 2', 'current version': '2.0' },
    // Add more rows as needed
  ];

  // Define the columns for Table 1
  table1Columns = [
    { field: 'st.No', header: 'St. No' },
    { field: 'product code', header: 'Product Code' },
    { field: 'product name', header: 'Product Name' },
    { field: 'current version', header: 'Current Version' },
  ];
  table2Data = [
    { 'st.No': 1, 'Modal Code': 'P001', 'Modal Name': 'Product 1' },
    { 'st.No': 2, 'Modal Code': 'P002', 'Modal Name': 'Product 2'},
    // Add more rows as needed
  ];

  // Define the columns for Table 1
  table2Columns = [
    { field: 'st.No', header: 'St. No' },
    { field: 'Modal Code', header: 'Modal Code' },
    { field: 'Modal Name', header: 'Modal Name' }
  ];
  table3Data = [
    { 'Virsion Number': 'P001', 'Virsion Date': 'Product 1' },
    { 'Virsion Number': 'P002', 'Virsion Date': 'Product 2'},
    // Add more rows as needed
  ];

  // Define the columns for Table 1
  table3Columns = [
    { field: 'Virsion Number', header: 'Virsion Number' },
    { field: 'Virsion Date', header: 'Virsion Date' }
  ];
  showDialog() {
    this.display = true;
    // Assuming `product` is an array of objects with data for your tables
    this.product = [
      // Table 1 data
      // Table 2 data
      // Table 3 data
    ];
  }
  editRow(rowData: any) {
    // Add your logic to handle editing here
    console.log('Edit row:', rowData);
  }

  // Delete a row
  deleteRow(rowData: any) {
    // Add your logic to handle deletion here
    console.log('Delete row:', rowData);
  }
// For Table 2


// For Table 3
editRowTable3(rowData: any) {
  // Implement edit functionality for Table 3
}

deleteRowTable3(rowData: any) {
  // Implement delete functionality for Table 3
}

  toggleMenu(menu: any) {
    menu.show = !menu.show;
  }
  // Method to show edit dialog
  showEditDialog() {
    this.editDisplay = true;
  }

  // Method to save edits
  save() {
    // Add your save logic here
    this.editDisplay = false;
  }

  // Method to cancel edits
  cancel() {
    this.editDisplay = false;
  }
  refreshDialog() {
    // Implement the refresh logic here
    console.log('Dialog refreshed');
  }

  // Function to handle maximize icon click
  maximizeDialog() {
    // Implement the maximize logic here
    console.log('Dialog maximized');
  }
}