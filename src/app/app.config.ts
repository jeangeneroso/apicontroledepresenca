import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module'; // Ajuste o caminho se suas rotas estiverem em app.routes.ts
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimations(),
        provideHttpClient(),
        importProvidersFrom(MatToolbarModule, MatButtonModule, AppRoutingModule),
        provideAnimations(),
        provideHttpClient()
    ]
};