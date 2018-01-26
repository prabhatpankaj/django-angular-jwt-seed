import {Component} from '@angular/core';

@Component({
  selector: 'app-error-404',
  moduleId: module.id,
  template: `
    <div class="app flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="clearfix">
              <h1 class="float-left display-3 mr-4">404</h1>
              <h4 class="pt-3">Oops! You're lost.</h4>
              <p class="text-muted">The page you are looking for was not found.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Error404Component {

  constructor() {
  }

}
