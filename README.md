# Nuxt Starter

Template personale per avviare rapidamente nuovi progetti con **Nuxt 4, Vue 3, TypeScript e Tailwind CSS 4**.

L'obiettivo è avere una base di partenza già configurata, con una struttura pulita e alcune funzionalità comuni pronte all'uso.

## Tecnologie

- [Nuxt 4](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Caratteristiche

### Tema chiaro e scuro

Il progetto include un sistema di gestione del tema basato sull'attributo `data-theme` applicato direttamente all'elemento HTML.

Il comportamento prevede:

1. Lettura della preferenza salvata in `localStorage`.
2. Se non esiste una preferenza salvata, rilevamento automatico del tema del sistema operativo.
3. Applicazione del tema tramite l'attributo `data-theme` sull'elemento `<html>`.

La configurazione iniziale si trova in `app/app.vue`.

### CSS globale e variabili

Il file `app/assets/css/main.css` contiene gli stili globali e le variabili CSS utilizzate per gestire i temi.

I colori e le proprietà visive sono centralizzati, così da poter personalizzare rapidamente l'aspetto grafico di ogni nuovo progetto senza modificare la logica di gestione del tema.

### Tailwind CSS 4

Tailwind CSS è configurato tramite il plugin ufficiale Vite `@tailwindcss/vite`.

La configurazione si trova in `nuxt.config.ts`, mentre l'importazione di Tailwind è presente nel CSS globale.

## Struttura del progetto

```text
├── app/
│   ├── app.vue
│   ├── assets/
│   │   └── css/
│   │       └── main.css
│   └── pages/
│       └── index.vue
├── public/
├── server/
├── nuxt.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Installazione

Dopo aver creato un nuovo repository utilizzando questo template, clonare il progetto e installare le dipendenze:

```bash
npm install
```

Avviare il server di sviluppo:

```bash
npm run dev
```

L'applicazione sarà disponibile all'indirizzo:

```text
http://localhost:3000
```

## Personalizzazione

Prima di iniziare un nuovo progetto:

- Modificare le variabili CSS in `main.css` per definire la nuova palette cromatica.
- Personalizzare le pagine e i componenti Vue.
- Aggiungere eventuali moduli e dipendenze specifici del progetto.
- Configurare le eventuali API e le Server Routes di Nuxt secondo le necessità.

## Filosofia del template

Questo starter vuole essere una base leggera e riutilizzabile, non un framework aggiuntivo.

Contiene soltanto configurazioni e funzionalità comuni. Le dipendenze specifiche, i moduli e le funzionalità applicative verranno aggiunti di volta in volta in base alle esigenze del singolo progetto.
