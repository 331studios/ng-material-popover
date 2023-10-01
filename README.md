# 331studios - (Ng) Material Popover

Tags suppressed until future version.

[//]: # ([![npm version]&#40;https://badge.fury.io/js/%40material-extended%2Fmde.svg&#41;]&#40;https://www.npmjs.com/package/%40material-extended%2Fmde&#41;)

[//]: # ([![Build Status]&#40;https://travis-ci.org/material-extended/popover.svg?branch=master&#41;]&#40;https://travis-ci.org/material-extended/popover&#41;)

[//]: # ([![Conventional Commits]&#40;https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg&#41;]&#40;https://conventionalcommits.org&#41;)

[//]: # ([![Join the chat at https://gitter.im/material-extended/mde]&#40;https://badges.gitter.im/material-extended/mde.svg&#41;]&#40;https://gitter.im/material-extended/mde?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge&#41;)

[//]: # ([![FOSSA Status]&#40;https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjoejordanbrown%2Fpopover.svg?type=shield&#41;]&#40;https://app.fossa.io/projects/git%2Bgithub.com%2Fjoejordanbrown%2Fpopover?ref=badge_shield&#41;)

#### Links
New Stackblitz Coming Soon



### Project status


This was originally created as an example for a `@angular/material` issue feature request.
Issue can be found at [angular/material2#2691](https://github.com/angular/material2/issues/2691)

The project [@material-extended/mde](https://github.com/joejordanbrown/popover) has gone dormant. We've
forked the project and re-created a scaled down version of the code base in our organization
under the name @331studios/ng-material-popover. We've preserved
the tag name <mde-popover> and all existing attributes. 

### Examples

[//]: # ()
[//]: # (**Material theme picker**)

[//]: # ()
[//]: # ([![Material theme picker]&#40;https://media.giphy.com/media/jsxheZJXN1346GD5St/giphy.gif&#41;]&#40;https://stackblitz.com/edit/angular-popover-demo&#41;)

[//]: # ()
[//]: # (**Standard popover**)

[//]: # ()
[//]: # ()
[//]: # (![image]&#40;https://cloud.githubusercontent.com/assets/10200431/22394189/02e9b21e-e511-11e6-9f91-c6b470a6b212.png&#41;)

[//]: # ()
[//]: # ()
[//]: # (![image]&#40;https://cloud.githubusercontent.com/assets/10200431/22394186/e21a235c-e510-11e6-9cde-948b1a4382bc.png&#41;)

[//]: # ()
[//]: # (**Google+ style popover**)

[//]: # ()
[//]: # (![image]&#40;https://cloud.githubusercontent.com/assets/10200431/22397870/4f27ddba-e573-11e6-943f-2d737b59d39e.png&#41;)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()

### Installation
Install npm package using:

`yarn add @331studios/ng-material-popover`
or
`npm install @331studios/ng-material-popover`

[//]: # (Install required packages @angular/cdk)

[//]: # ()
[//]: # (`yarn add @angular/cdk`)

[//]: # (or)

[//]: # (`npm install @angular/cdk`)

### Initial setup
The CDK overlays depend on a small set of structural styles to work correctly. If you're using Angular Material, these styles have been included together with the theme, otherwise if you're using the CDK on its own, you'll have to include the styles yourself. You can do so by importing the prebuilt styles in your global stylesheet:

@import '~@angular/cdk/overlay-prebuilt.css';

### Angular Version Support

| Release Version | Angular Version |
|-----------------|-----------------|
| 0.1.0           | 16.2.x          |

#### Older Versions

- No backporting to Angular 10-15 versions is planned.
- For Angular 8 & 9 support please use the [@material-extended/mde](https://github.com/joejordanbrown/popover)
version.

### Import module

app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MdePopoverModule } from '@331studios/ng-material-popover';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdePopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Todo
1. A design document needs creating to finalise requirements and API specifications.
   Once a document is created the component can be refactored and released as beta for testing.
2. New Stackblitz Examples needed
3. Reattach to builds, FOSSA, and other code quality tools.

[//]: # (### Available features)

[//]: # ()
[//]: # (| Feature | Notes                                                                                | Docs                                                                        |)

[//]: # (|---------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|)

[//]: # (| popover | In-progress &#40;[popover demo]&#40;https://uixd.co.uk/open-source-software/material-extended/demo&#41;&#41; | [Docs]&#40;https://github.com/material-extended/mde/blob/master/projects/material-extended/mde/src/lib/popover/popover.md&#41; |)


### Issues

Please report bugs and issues [here](https://github.com/331studios/material-popover/issues).

### License
MIT © [331Studios](https://github.com/331studios)

[//]: # ([![FOSSA Status]&#40;https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjoejordanbrown%2Fpopover.svg?type=large&#41;]&#40;https://app.fossa.io/projects/git%2Bgithub.com%2Fjoejordanbrown%2Fpopover?ref=badge_large&#41;)
