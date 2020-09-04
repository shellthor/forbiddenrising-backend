import { Controller, Get } from '@nestjs/common'
import {
  HealthCheckService,
  DNSHealthIndicator,
  HealthCheck,
  MemoryHealthIndicator,
} from '@nestjs/terminus'

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.dns.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
    ])
  }
}
