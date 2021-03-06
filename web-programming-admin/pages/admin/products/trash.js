import Head from "next/head";
import NextLink from "next/link";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../../../components/dashboard-layout";
import { deleteData, getData, patchData } from "../../../utils/fecthData";
import PerfectScrollbar from "react-perfect-scrollbar";
import { forwardRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export async function getStaticProps() {
  const data = await getData("products/trash");
  return {
    props: { products: data.products },
  };
}

const TrashProductList = ({ products }) => {
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  // const [limit, setLimit] = useState(10);
  // const [page, setPage] = useState(0);

  const router = useRouter();

  const handleSelectAll = (event) => {
    let newSelectedProductIds;

    if (event.target.checked) {
      newSelectedProductIds = products.map((product) => product._id);
    } else {
      newSelectedProductIds = [];
    }

    setSelectedProductIds(newSelectedProductIds);
  };

  const handleSelectOne = (event, id) => {
    let newSelectedProductIds = [...selectedProductIds];
    let index = selectedProductIds.indexOf(id);
    if (index >= 0) newSelectedProductIds.splice(index, 1);
    else newSelectedProductIds.push(id);
    setSelectedProductIds(newSelectedProductIds);
  };

  // const handleLimitChange = (event) => {
  //   setLimit(event.target.value);
  // };

  // const handlePageChange = (event, newPage) => {
  //   setPage(newPage);
  // };

  const handleOpenDeleteDialog = () => {
    setDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialog(false);
  };

  const handleReStoreProduct = async () => {
    const data = await patchData("products/restore", {
      productIds: selectedProductIds,
    });

    if (data.success) {
      toast.success(data.success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSelectedProductIds([]);
      return router.push("/admin/products/trash");
    }
  };

  const handleDeleteProduct = async () => {
    const data = await deleteData("products/destroy", {
      productIds: selectedProductIds,
    });
    if (data.success) {
      toast.success(data.success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleCloseDeleteDialog();
      setSelectedProductIds([]);
      return router.push("/admin/products/trash");
    }
  };

  return (
    <>
      <Head>
        <title>Th??ng r??c - Beeyou</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                m: -1,
              }}
            >
              <Typography sx={{ m: 1 }} variant="h4">
                Th??ng r??c
              </Typography>
              {selectedProductIds.length > 0 && (
                <Box sx={{ m: 1 }}>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={handleReStoreProduct}
                  >
                    Kh??i ph???c
                  </Button>

                  <Button
                    color="error"
                    variant="contained"
                    onClick={handleOpenDeleteDialog}
                  >
                    X??a s???n ph???m
                  </Button>

                  <Dialog
                    open={deleteDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseDeleteDialog}
                    aria-describedby="delete-dialog"
                  >
                    <DialogTitle>X??a s???n ph???m</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="delete-dialog">
                        B???n c?? ?????ng ?? x??a {selectedProductIds.length} s???n ph???m.
                        <br></br> S???n ph???m sau khi x??a s??? kh??ng th??? kh??i ph???c
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={handleCloseDeleteDialog}
                      >
                        H???y
                      </Button>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={handleDeleteProduct}
                      >
                        ?????ng ??
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              )}
            </Box>
            {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box> */}
          </Box>

          <Box sx={{ mt: 3 }}>
            {products.length > 0 ? (
              <Card>
                <PerfectScrollbar>
                  <Box sx={{ minWidth: 1050 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={
                                selectedProductIds.length === products.length
                              }
                              color="primary"
                              // indeterminate={
                              //   selectedProductIds.length > 0 &&
                              //   selectedProductIds.length < products.length
                              // }
                              onChange={handleSelectAll}
                            />
                          </TableCell>
                          <TableCell>T??n s???n ph???m</TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            S??? l?????ng bi???n th???
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            Gi??
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            ???? b??n
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            Ng??y x??a
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* {products.slice(0, limit).map((product) => ( */}
                        {products.map((product) => (
                          <TableRow
                            hover
                            key={product._id}
                            selected={
                              selectedProductIds.indexOf(product._id) !== -1
                            }
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={
                                  selectedProductIds.indexOf(product._id) !== -1
                                }
                                onChange={(event) =>
                                  handleSelectOne(event, product._id)
                                }
                                value="true"
                              />
                            </TableCell>
                            <TableCell>
                              <Box
                                sx={{
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <Avatar
                                  src={product.variant[0].img}
                                  sx={{ mr: 2 }}
                                  variant="square"
                                ></Avatar>
                                <Typography color="textPrimary" variant="body1">
                                  {product.title}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell style={{ textAlign: "center" }}>
                              {product.variant.length}
                            </TableCell>
                            <TableCell style={{ textAlign: "center" }}>
                              {product.price}
                            </TableCell>
                            <TableCell style={{ textAlign: "center" }}>
                              {product.sold}
                            </TableCell>
                            <TableCell style={{ textAlign: "center" }}>
                              {product.deletedAt}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </PerfectScrollbar>
                {/* <TablePagination
        component="div"
        count={products.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
              </Card>
            ) : (
              <Typography sx={{ m: 1 }} variant="p">
                Th??ng r??c tr???ng.{" "}
                {
                  <NextLink href="/admin/products/" passHref>
                    Tr??? v??? danh s??ch s???n ph???m
                  </NextLink>
                }
              </Typography>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

TrashProductList.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default TrashProductList;
