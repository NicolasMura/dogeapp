import { MockBuilder, MockRender } from 'ng-mocks';
import { App } from './app';

describe('App', () => {
  beforeEach(() => MockBuilder(App));

  it('should create the app', () => {
    const fixture = MockRender(App);
    const app = fixture.point.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = MockRender(App);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, dogeapp');
  });
});
