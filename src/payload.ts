
/**
 * Status Payload
 */
interface status {
    UsedMemory: number
    Totalmemory: number
    ProcessLoad: number
    Cores: number
    Threads: number
    NetworkInbound: number
    NetworkOutbound: number
}

/**
 * Planner Payload
 */
interface planner {
    ipBlocks: ipBlocks[]
    failedAddresses: failedAddresses[]
}

interface ipBlocks {
    version: number
    broadcast_address: string
    size: number
}

interface failedAddresses {
    address: string
    status: number
    failed_at: number
} 

export { status, planner }