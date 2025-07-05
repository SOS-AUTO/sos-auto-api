import { Test, TestingModule } from '@nestjs/testing';
import { TowingService } from './towing.service';

describe('TowingService', () => {
  let service: TowingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TowingService],
    }).compile();

    service = module.get<TowingService>(TowingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
