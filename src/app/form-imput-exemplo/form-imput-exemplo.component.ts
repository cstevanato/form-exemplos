import { IPlaneta } from './../shared/models/planeta';
import { DropdownService } from './../shared/service/dropdown.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {  FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-form-imput-exemplo',
  templateUrl: './form-imput-exemplo.component.html',
  styleUrls: ['./form-imput-exemplo.component.css']
})
export class FormImputExemploComponent implements OnInit {

  value: any;
  formulario: FormGroup;
  planetas: IPlaneta[];

  private inscricao: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private dropdownService: DropdownService) { }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  ngOnInit() {

    this.inscricao = this.dropdownService.getPlanetas()
    .subscribe(dados => {
      console.log(dados);
      this.planetas = dados;
    });

    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      cep: [null, [Validators.required]],
      moeda: [20.5, [Validators.required]],
      planeta: [null]
    });

  }

  planetaSelecionado(campo) {
    return {
      'selected': campo
    }
  }

}
