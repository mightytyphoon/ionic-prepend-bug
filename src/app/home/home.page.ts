import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { DummyComponent } from '../components/dummy/dummy.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild(IonContent) ionContent: IonContent;
  @ViewChild('container') container: ElementRef<HTMLDivElement>;
  @ViewChild('container' , {read: ViewContainerRef}) containerViewContainerRef: ViewContainerRef;
  @ViewChild('disclaimer') disclaimer: ElementRef<HTMLDivElement>;

  private counter: number;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.counter = 0;
  }

  ngAfterViewInit(): void{
    this.prependDummyComponent();
    this.prependDummyComponent();
    this.ionContent.getScrollElement().then((element) => {
      element.scrollTop = 300;
    })
  }

  public prependDummyComponent(){
    console.time('dummy component creation');
    const resolver = this.componentFactoryResolver.resolveComponentFactory(DummyComponent);
    const DummyCptRef = this.containerViewContainerRef.createComponent<DummyComponent>(resolver);
    console.timeEnd('dummy component creation');

    console.time('dummy insert before');
    const containerEl = this.container.nativeElement;
    const dummyEl = DummyCptRef.location.nativeElement;
    if(containerEl.children.length > 0) {
      containerEl.insertBefore(dummyEl , containerEl.children[0]);
    } else {
      containerEl.appendChild(dummyEl);
    }
    console.timeEnd('dummy insert before');

    DummyCptRef.instance.setNumber(this.counter);
    this.counter++;
  }

}
