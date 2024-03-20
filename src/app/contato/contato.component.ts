import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.formBuilder.group({
    nome:
      ["", [Validators.minLength(4), Validators.required]],
    assunto:
      ["", [Validators.minLength(10), Validators.required]],
    telefone:
      ["", [Validators.minLength(11), Validators.required]],
    email:
      ["", [Validators.email, Validators.required]],
    mensagem:
      ["", []]
  })

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    this.snackBar.open("Mensagem enviada com sucesso!", "OK", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    })

    this.formContato.reset()
  }
}
