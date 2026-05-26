import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-projetos-sociais',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projetos-sociais.html',
  styleUrls: ['./projetos-sociais.css']
  })
export class ProjetosSociaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}