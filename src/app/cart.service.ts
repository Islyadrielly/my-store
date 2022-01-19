import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) { 
    // adiciona ao carrinho, anexa o item solicitado a um array
    this.items.push(product);
  }

  getItems() {
    // pega os itens adicionados ao carrinho e retorna cada um deles em suas respectivas quantidades
    return this.items;
  }

  clearCart() {
    // limpa o carrinho, retornando o array vazio.
    this.items = [];
    return this.items;
  }
  
    getShippingPrices() {
      return this.http.get<{type: string, price: number}[]> 
      ('/assets/shipping.json');
    }
}
