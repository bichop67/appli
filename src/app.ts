import { Application } from '@nativescript/core';
import { install } from '@nativescript/core/ui/frame';
import { registerNavigationService } from 'react-nativescript-navigation';

// Install frame plugin
install();

// Register navigation service
registerNavigationService();

Application.run({ moduleName: 'app-root' });