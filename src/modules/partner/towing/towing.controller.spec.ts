import { Test, TestingModule } from '@nestjs/testing';
import { TowingController } from './towing.controller';
import { TowingService } from './towing.service';

describe('TowingController', () => {
  let controller: TowingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TowingController],
      providers: [TowingService],
    }).compile();

    controller = module.get<TowingController>(TowingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
