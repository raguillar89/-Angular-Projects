import { Funcionario } from './../funcionario/funcionario.model';
import { FuncionarioService } from './../funcionario/funcionario.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Fazenda } from '../fazenda/fazenda.model';
import { FazendaService } from '../fazenda/fazenda.service';
import { HomeService } from './home.service';
import { Weather, WeatherData } from './weatherModel/weather.model';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('graintGraphic', { static: true }) elementGraphic: ElementRef;

  constructor(
    private fazendaService: FazendaService,
    private funcionarioService: FuncionarioService,
    private weatherService: HomeService
  ) {}

  fazendas: Fazenda[] = [];
  funcionarios: Funcionario[] = [];
  weatherData?: WeatherData;
  weatherTemp: WeatherData[] = [];
  weatherIcon: string[] = [];
  graintGraphicName: string[] = [];
  graintGraphicQuantity: number[] = [];

  ngOnInit(): void {
    this.fazendaService.read().subscribe((fazendas) => {
      this.fazendas = fazendas;
    });

    this.funcionarioService.read().subscribe((funcionario) => {
      this.funcionarios = funcionario;
    });

    this.fazendaService.read().subscribe((fazendas) => {
      fazendas.forEach((name) => {
        this.graintGraphicName.push(name.grao);
        console.log(this.graintGraphicName);
      });
    });

    this.fazendaService.read().subscribe((fazendas) => {
      fazendas.forEach((inventory) => {
        this.graintGraphicQuantity.push(inventory.estoque);
        console.log(this.graintGraphicQuantity);
      });
    });

    setTimeout(() => {
      this.fazendaService.read().subscribe((fazendaName) => {
        fazendaName.forEach((fazenda) => {
          this.weatherService.getWeatherData(fazenda.cidade).subscribe({
            next: (response) => {
              this.weatherData = response;
              this.weatherTemp.push(response);
              response.weather.forEach((w) => {
                this.weatherIcon.push(w.main);
                console.log(w.main);
              });
            },
          });
        });
      });

      new Chart(this.elementGraphic.nativeElement, {
        type: 'bar',
        data: {
          labels: this.graintGraphicName,
          datasets: [
            {
              label: 'Toneladas',
              data: this.graintGraphicQuantity,
            },
          ],
        },
        options: {
          backgroundColor: '#066610',
        },
      });
    }, 2000);
  }
}
