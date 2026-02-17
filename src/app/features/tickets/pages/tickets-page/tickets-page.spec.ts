import { MockBuilder, MockRender } from 'ng-mocks';
import { TicketsPage } from './tickets-page';

describe('TicketsPage', () => {
  beforeEach(() => MockBuilder(TicketsPage));

  it('should create the TicketsPage', () => {
    const fixture = MockRender(TicketsPage);
    const component = fixture.point.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should update quantity from input event', () => {
    const fixture = MockRender(TicketsPage);
    const component = fixture.point.componentInstance;

    const fakeEvent = { target: { value: '5' } } as unknown as Event;
    component.setQuantity(fakeEvent);

    expect(component.quantity()).toBe(5);
  });
});
