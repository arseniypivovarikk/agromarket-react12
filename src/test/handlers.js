import { http, HttpResponse } from 'msw';
export const sampleProducts=[{id:1,name:'Мёд гречишный',price:3500,category:'Мёд'},{id:2,name:'Картофель молодой',price:250,category:'Овощи'}];
export const handlers=[http.get('*/api/products',()=>HttpResponse.json(sampleProducts)),http.post('*/api/auth/login',async({request})=>{const {email,password}=await request.json();return password==='secret123'?HttpResponse.json({token:'test-token',user:{id:7,name:'Айгерим',email,role:'farmer'}}):HttpResponse.json({error:'Неверный e-mail или пароль'},{status:401});})];
