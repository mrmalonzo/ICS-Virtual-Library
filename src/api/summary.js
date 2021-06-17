
import { api } from '../utils/api';

export const summaryreport = () => api.get(`/summary/summary-report`);
export const activitylog = () => api.get(`/summary/activity_log`);