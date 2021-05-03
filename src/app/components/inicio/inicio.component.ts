import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peso = 60;
  edad = 20;
  altura = 170;
  sexo = 'Masculino';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event:any):void{
    //console.log(event.target.value);
    this.altura = event.target.value
  }

  masculino():void{
    this.sexo = 'Masculino'
  }

  femenino():void{
    this.sexo = 'Femenino'
  }

  calcularBMI():void{
    const BMI = this.peso / Math.pow(this.altura/100,2)
    this.router.navigate(['/resultado', BMI.toFixed(1)])
    //console.log(BMI.toFixed(1));
  }

}
