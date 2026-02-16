import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { ExchangeHighlight } from './exchange-highlight';

describe('ExchangeHighlight', () => {
  let fixture: MockedComponentFixture<ExchangeHighlight, object>;
  let component: ExchangeHighlight;

  beforeEach(() => MockBuilder(ExchangeHighlight));

  beforeEach(() => {
    fixture = MockRender(ExchangeHighlight, { exchange: null });
    component = fixture.point.componentInstance;
  });

  it('should create the ExchangeHighlight', () => {
    expect(component).toBeTruthy();
  });
});
