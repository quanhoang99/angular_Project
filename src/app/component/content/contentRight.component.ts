import {Component} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {DecimalPipe} from "@angular/common";

interface AssetItem {
  name: string;
  buyPrice: number;
  quantity: number;
  total: number;
}

const GOLD_DATA: AssetItem[] = [
  { name: 'Vàng SJC', buyPrice: 74500000, quantity: 1, total: 74500000 },
  { name: 'Vàng 24K', buyPrice: 74000000, quantity: 2, total: 148000000 },
  { name: 'Vàng 18K', buyPrice: 55000000, quantity: 1, total: 55000000 },
  { name: 'Vàng 14K', buyPrice: 42000000, quantity: 3, total: 126000000 }
];

const BANK_DATA: AssetItem[] = [
  { name: 'Techcombank', buyPrice: 50000000, quantity: 1, total: 50000000 },
  { name: 'Vietcombank', buyPrice: 100000000, quantity: 1, total: 100000000 },
  { name: 'MB Bank', buyPrice: 75000000, quantity: 1, total: 75000000 },
  { name: 'TPBank', buyPrice: 25000000, quantity: 1, total: 25000000 }
];

const STOCK_DATA: AssetItem[] = [
  { name: 'VNM', buyPrice: 45000, quantity: 1000, total: 45000000 },
  { name: 'VHM', buyPrice: 38000, quantity: 2000, total: 76000000 },
  { name: 'FPT', buyPrice: 85000, quantity: 500, total: 42500000 },
  { name: 'MWG', buyPrice: 42000, quantity: 1000, total: 42000000 }
];

interface Tile {
  cols: number;
  rows: number;
  text: string;
  color: string;
}

@Component({
  selector: "content-right",
  standalone: true,
  templateUrl: "./contentRight.component.html",
  styleUrl: "./contentRight.component.css",
  imports: [MatCardModule, MatGridListModule, MatTableModule, DecimalPipe],
})
export class ContentRightComponent {
  displayedColumns: string[] = ['name', 'buyPrice', 'quantity', 'total'];
  goldDataSource = GOLD_DATA;
  bankDataSource = BANK_DATA;
  stockDataSource = STOCK_DATA;

  goldTiles: Tile[] = [
    { text: 'TÀI SẢN THỰC', cols: 4, rows: 1, color: '#3f51b5' },
    { text: 'Loại Vàng', cols: 1, rows: 1, color: '#5c6bc0' },
    { text: 'Giá Mua', cols: 1, rows: 1, color: '#5c6bc0' },
    { text: 'Số Lượng', cols: 1, rows: 1, color: '#5c6bc0' },
    { text: 'Thành Tiền', cols: 1, rows: 1, color: '#5c6bc0' }
  ];

  bankTiles: Tile[] = [
    { text: 'TÀI KHOẢN NGÂN HÀNG', cols: 4, rows: 1, color: '#2e7d32' },
    { text: 'Tên Ngân Hàng', cols: 1, rows: 1, color: '#43a047' },
    { text: 'Số Dư', cols: 1, rows: 1, color: '#43a047' },
    { text: 'Số Tài Khoản', cols: 1, rows: 1, color: '#43a047' },
    { text: 'Tổng', cols: 1, rows: 1, color: '#43a047' }
  ];

  stockTiles: Tile[] = [
    { text: 'CHỨNG KHOÁN', cols: 4, rows: 1, color: '#c62828' },
    { text: 'Mã CP', cols: 1, rows: 1, color: '#e53935' },
    { text: 'Giá Mua', cols: 1, rows: 1, color: '#e53935' },
    { text: 'Số Lượng', cols: 1, rows: 1, color: '#e53935' },
    { text: 'Tổng Giá Trị', cols: 1, rows: 1, color: '#e53935' }
  ];
}
