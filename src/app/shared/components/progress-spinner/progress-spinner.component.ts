import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {
  currentLoadingState = false;

  constructor(private loadingService: LoadingService,
              private ref: ChangeDetectorRef) {
    this.loadingService.state$.subscribe(nextLoadingState => {
      this.currentLoadingState = nextLoadingState;
      this.ref.detectChanges();
    });
  }
}
