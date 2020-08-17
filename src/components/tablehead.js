import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function HeadTable() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Task&nbsp;name</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Date&nbsp;start</TableCell>
                <TableCell align="center">Date&nbsp;end</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Assignee</TableCell>
                <TableCell align="center">Action</TableCell>
            </TableRow>
        </TableHead>
    )
}