import { MockBuilder, MockRender } from 'ng-mocks';
import { Error } from './error';

describe('Error', () => {
  beforeEach(() => MockBuilder(Error));

  it('should create the Error', () => {
    const fixture = MockRender(Error);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
