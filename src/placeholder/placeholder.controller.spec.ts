import { Test, TestingModule } from '@nestjs/testing';
import { PlaceholderController } from './placeholder.controller';

describe('Placeholder Controller', () => {
  let controller: PlaceholderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceholderController],
    }).compile();

    controller = module.get<PlaceholderController>(PlaceholderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
