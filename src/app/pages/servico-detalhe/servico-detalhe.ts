import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../../services/servicos';

@Component({
  selector: 'app-servico-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './servico-detalhe.html',
  styleUrl: './servico-detalhe.css'
})
export class ServicoDetalheComponent {

  servico: any = null;
  carregando = true;
  erro = '';

  constructor(
    private route: ActivatedRoute,
    private servicoService: ServicosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.carregando = false;
      this.erro = 'Serviço não encontrado.';
      return;
    }

    this.servicoService.getServicoPorId(id).subscribe({
      next: (dados) => {
        console.log('Dados recebidos:', dados);

        this.servico = dados;
        this.carregando = false;

        this.cdr.detectChanges();
      },

      error: (erro) => {
        console.log('Erro na API:', erro);

        this.carregando = false;
        this.erro = 'Não foi possível carregar as informações.';

        this.cdr.detectChanges();
      }
    });
  }

}