export enum RESOURCESTATUS {
  AVAILABLE = "Available",
  VACATION = "Vacation",
  BUSY = "Busy",
  COMPLETED = "Completed",
}

export enum PROJECTSTATUS {
  ACTIVE = "Active",
  CLOSED = "Closed",
}

export enum ACTION {
  ALLOW = "Allow",
  RESTRICT = "Restrict",
  DELETE = "Delete",
}

export enum STATUS {
  ERROR = "Error",
  SUCCESS = "Success",
  WARNING = "Warning",
  DEFAULT = "Default",
  PROCESSING = "Processing",
}

export enum PAYMENT_STATUS {
  PENDING = "Pending payment",
  REVISION = "Revision requested",
  APPROVED = "Approved",
}

export enum TIMESHEET_STATUS {
  PENDING = "Pending Approval",
  APPROVAL = "Approved",
  REVISION = "Revision Requested",
}

export enum INVOICES_STATUS {
  PENDING = "Pending",
  INTRANSIT = "In trasit",
  Paid = "Paid",
}
