import { saveAs } from 'file-saver';
import Papa from 'papaparse';

export const downloadCSV = (data) => {
  const headers = [];

    Object.entries(data[0]).map(([key])=>(
    headers.push(key)
  ))

  const csvData = Papa.unparse({ fields: headers, data });
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, 'LeadData.csv');
};