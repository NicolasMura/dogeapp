import { MockBuilder, MockRender } from 'ng-mocks';
import { TicketsPage } from './tickets-page';

describe('TicketsPage', () => {
  beforeEach(() => MockBuilder(TicketsPage));

  it('should create the TicketsPage', () => {
    const fixture = MockRender(TicketsPage);
    const component = fixture.point.componentInstance;

    expect(component).toBeTruthy();
  });
});
